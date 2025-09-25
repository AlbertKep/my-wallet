import { useState, type FormEvent } from "react";
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

type Errors = {
  email?: string;
  password?: string;
};
const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrors({ email: "", password: "" });
    // const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patternIsValid = pattern.test(email);
    if (!patternIsValid) {
      setErrors((prev) => ({
        ...prev,
        email: "Email must be a valid, e.g. kowalski@gmail.com",
      }));
    }
    if (password.length < 5) {
      setErrors((prev) => ({
        ...prev,
        password: "Password should contains min 5 characters",
      }));
    }
    const hasErrors = !patternIsValid || password.length < 3;
    if (hasErrors) return;
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <BackgroundWrapper>
          <FieldsWrapper>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextError $visible={!!errors.email}>{errors.email}</TextError>
          </FieldsWrapper>
          <FieldsWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextError $visible={!!errors.password}>
              {errors.password}
            </TextError>
          </FieldsWrapper>
        </BackgroundWrapper>

        <StyledButton>Register</StyledButton>
      </StyledForm>
      <AuthLinkHint>Have an account? Sign in!</AuthLinkHint>
    </>
  );
};

export default Authentication;
