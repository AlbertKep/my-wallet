import ReactDom from "react-dom";
import { Content, StyledSurface } from "./Modal.styled";
import { type ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;
  return ReactDom.createPortal(
    <Content>
      <StyledSurface>{children}</StyledSurface>
    </Content>,
    portalElement,
  );
};

export default Modal;
