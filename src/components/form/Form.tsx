import type { ReactNode, FormEvent } from "react";
import { StyledForm, BackgroundWrapper, StyledButton, AuthLinkHint } from "./Form.ts";

type FormProps = {
  children: ReactNode;
  handleSubmit: (event: FormEvent) => Promise<void>;
};
const Form: React.FC<FormProps> = ({ children, handleSubmit }) => {
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <BackgroundWrapper>{children}</BackgroundWrapper>
        <StyledButton>Register</StyledButton>
      </StyledForm>
      <AuthLinkHint>Have an account? Sign in!</AuthLinkHint>
    </>
  );
};

export default Form;
