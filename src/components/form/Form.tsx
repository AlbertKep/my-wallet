import type { ReactNode, FormEvent } from "react";
import { StyledForm, BackgroundWrapper, StyledButton, AuthLinkHint } from "./Form.ts";

type FormProps = {
  children: ReactNode;
  submitLabel: string;
  handleSubmit: (event: FormEvent) => Promise<void>;
};
const Form: React.FC<FormProps> = ({ children, submitLabel, handleSubmit }) => {
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <BackgroundWrapper>{children}</BackgroundWrapper>
        <StyledButton>{submitLabel}</StyledButton>
      </StyledForm>
      <AuthLinkHint>Have an account? Sign in!</AuthLinkHint>
    </>
  );
};

export default Form;
