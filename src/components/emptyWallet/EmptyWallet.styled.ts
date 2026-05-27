import styled, { keyframes, css } from "styled-components";
import { Heading } from "../ui/Heading.styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(300px, 80%, 1200px);
  background-color: ${({ theme }) => theme.colors.warmBeige};
  border-radius: 12px;
  margin: 0.5em auto;
  padding: 1em 0.5em;
`;

export const StyledHeading = styled(Heading)`
  font-size: clamp(1.75rem, 1rem + 1.5vw, 3rem);
  margin: 0;
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
  width: clamp(280px, 50%, 350px);
  margin-top: 2em;
  ${shakeAnimation()}

  img {
    width: 100%;
  }
`;
