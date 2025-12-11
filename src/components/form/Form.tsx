import type { ReactNode, FormEvent } from "react";
import { StyledForm, BackgroundWrapper, StyledButton } from "./Form.ts";

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
      {/* <AuthLinkHint message={"Have an account?"} linkText={"Register!"} linkTo={"/register"} /> */}
    </>
  );
};

export default Form;
