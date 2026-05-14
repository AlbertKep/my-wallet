import styled from "styled-components";
import { Surface } from "@/components/ui/Surface.styled.ts";
import { Button } from "@/components/ui/Button.styled.ts";

export const Wrapper = styled(Surface)`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5em;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: clamp(0.8rem, 0.8rem + 0.5vw, 1.8rem);
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;

  li {
    margin-bottom: 0.2em;
  }
  li:not(:last-child)::after {
    content: "|";
    margin: 0 8px;
    color: rgba(0, 0, 0, 0.3);
    font-weight: 400;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  height: min-content;
  justify-content: center;
  font-size: clamp(0.6rem, 0.7rem + 0.5vw, 1.7rem);
  margin: 0.5em 0;
`;
