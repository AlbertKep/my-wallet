import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form.tsx";
import FormField from "../../components/formField/FormField.tsx";
import AuthLinkHint from "../../components/authLinkHint/AuthLinkHint.tsx";
import { TextError } from "../register/Register.styled.ts";
import { authValidate, type Errors } from "../../utils/validation/authValidate.ts";
import { registerUser } from "../../services/auth.ts";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Errors>({});
  const navigate = useNavigate();

  const handleEmailChange = (value: string) => setEmail(value);
  const handlePasswordChange = (value: string) => setPassword(value);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { errors, hasErrors } = authValidate(email, password);
    if (hasErrors) {
      setError(errors);
      return;
    }

    await registerUser(email, password);
    navigate("/dashboard");
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} submitLabel='Register'>
        <FormField id='email' name='E-mail' label='email' type='text' value={email} onValueChange={handleEmailChange} error={error.email} />
        <FormField
          id='password'
          name='Password'
          label='password'
          type='password'
          value={password}
          onValueChange={handlePasswordChange}
          error={error.password}
        />
        {error.general && <TextError $visible={!!error.general}>{error.general}</TextError>}
      </Form>
      <AuthLinkHint message={"Already have an account?"} linkText={"Sign in!"} linkTo={"/signin"} />
    </>
  );
};

export default Register;
