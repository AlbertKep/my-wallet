import styled, { keyframes, css } from "styled-components";
import { Heading } from "../ui/Heading.styled";

export const StyledHeading = styled(Heading)`
  font-size: clamp(1.75rem, 1rem + 1.5vw, 3rem);
  width: 100%;
  margin: 0;
  border-radius: 12px;
`;

const shake = keyframes`
  from {
    transform: rotate(4deg);
  }
  to{
    transform: rotate(-3deg);
  }
`;

const shakeAnimation = () => css`
  animation: ${shake} 2s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) alternate;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  margin-top: 2em;
  ${shakeAnimation()}

  img {
    width: 100%;
    height: auto;
  }
`;
