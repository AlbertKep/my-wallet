import type { ReactNode, FormEvent } from "react";
import Logo from "../logo/Logo.tsx";
import { StyledForm, BackgroundWrapper, StyledButton } from "./Form.styled.ts";

type FormProps = {
  children: ReactNode;
  submitLabel: string;
  handleSubmit: (event: FormEvent) => Promise<void>;
};
const Form: React.FC<FormProps> = ({ children, submitLabel, handleSubmit }) => {
  return (
    <>
      <Logo />
      <StyledForm onSubmit={handleSubmit}>
        <BackgroundWrapper>{children}</BackgroundWrapper>
        <StyledButton>{submitLabel}</StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
