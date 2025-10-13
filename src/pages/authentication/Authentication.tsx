import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { validate, type Errors } from "../../utils/validation.ts";

import { registerUser } from "../../services/auth.ts";
import {
  StyledForm,
  BackgroundWrapper,
  FieldsWrapper,
  Label,
  Input,
  StyledButton,
  AuthLinkHint,
  TextError,
} from "./Authentication.styled.ts";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { errors, hasErrors } = validate(email, password);
    if (hasErrors) {
      setErrors(errors);
      return;
    }

    await registerUser(email, password);
    navigate("/dashboard");
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <BackgroundWrapper>
          <FieldsWrapper>
            <Label htmlFor="email">E-mail</Label>
            <Input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextError $visible={!!errors.email}>{errors.email}</TextError>
          </FieldsWrapper>
          <FieldsWrapper>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextError $visible={!!errors.password}>{errors.password}</TextError>
          </FieldsWrapper>
        </BackgroundWrapper>

        <StyledButton>Register</StyledButton>
      </StyledForm>
      <AuthLinkHint>Have an account? Sign in!</AuthLinkHint>
    </>
  );
};

export default Authentication;
