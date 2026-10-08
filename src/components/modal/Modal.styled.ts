import styled from "styled-components";
import { Surface } from "../ui/Surface.styled";

export const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2222;
`;

export const StyledSurface = styled(Surface)`
  width: 100%;
  max-width: 1000px;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 1em;
  margin: 0 1em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5em;
  grid-area: button;

  button {
    font-size: clamp(0.6rem, 0.8rem + 0.5vw, 1.2rem);
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryViolet};
    }
  }
`;
