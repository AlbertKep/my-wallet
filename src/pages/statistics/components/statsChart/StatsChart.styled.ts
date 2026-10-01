import { Button } from "@/components/ui/Button.styled";
import { EmptyWrapper } from "@/components/ui/EmptyWrapper.styled";
import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: chart;
`;

export const ModeWrapper = styled.div`
  margin: 2em 0;
`;

export const ChartWrapper = styled.div`
  position: relative;
  height: 40vh;
  margin-top: 1em;
`;

export const StyledEmptyWrapper = styled(EmptyWrapper)`
  height: auto;

  p {
    margin-bottom: 2em;
    font-size: clamp(0.6rem, 0.8rem + 0.5vw, 1.1rem);
  }

  button {
    font-size: clamp(0.6rem, 0.8rem + 0.5vw, 1.2rem);
  }
`;

export const StyledButton = styled(Button)<{ $active: boolean }>`
  margin-right: 0.5em;
  font-size: clamp(0.6rem, 0.8rem + 0.5vw, 1rem);
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.orange : theme.colors.primaryViolet};
`;
