import type { ReactNode } from "react";
import { StyledForm, BackgroundWrapper, StyledButton, AuthLinkHint } from "./Form.ts";

type FormProps = {
  children: ReactNode;
};
const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <>
      {/* <StyledForm onSubmit={handleSubmit}> */}
      <StyledForm>
        <BackgroundWrapper>{children}</BackgroundWrapper>
        <StyledButton>Register</StyledButton>
      </StyledForm>
      <AuthLinkHint>Have an account? Sign in!</AuthLinkHint>
    </>
  );
};

export default Form;
