import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
// components
import AuthLinkHint from "@/components/authLinkHint/AuthLinkHint.tsx";
import Form from "@/components/form/Form.tsx";
import FormField from "@/components/formField/FormField.tsx";
// styles
import { FlexWrapper } from "@/components/ui/FlexWrapper.styled.ts";
import { TextError } from "@/components/ui/TextError.styled.ts";
// services
import { registerUser } from "@/services/auth.ts";
// utils
import { showToast } from "@/utils/showToast.tsx";
import { authValidate, type Errors } from "@/utils/validation/authValidate.ts";
// icons
import success from "@/assets/icons/success.svg";

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
    showToast("You have successfully registered in", success);
    navigate("/dashboard");
  };

  return (
    <FlexWrapper>
      <Form handleSubmit={handleSubmit} submitLabel="Register">
        <FormField
          id="email"
          name="E-mail"
          label="email"
          type="text"
          value={email}
          onValueChange={handleEmailChange}
          error={error.email}
        />
        <FormField
          id="password"
          name="Password"
          label="password"
          type="password"
          value={password}
          onValueChange={handlePasswordChange}
          error={error.password}
        />
        {error.general && <TextError $visible={!!error.general}>{error.general}</TextError>}
      </Form>
      <AuthLinkHint message={"Already have an account?"} linkText={"Sign in!"} linkTo={"/signin"} />
    </FlexWrapper>
  );
};

export default Register;
