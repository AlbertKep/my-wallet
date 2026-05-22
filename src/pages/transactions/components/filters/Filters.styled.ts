import styled from "styled-components";
import { Surface } from "@/components/ui/Surface.styled.ts";
import { Label } from "@/components/ui/Label.styled.ts";
import { Button } from "@/components/ui/Button.styled";
// animation
import { dropdownMotion } from "@/assets/styles/animations";

export const Wrapper = styled(Surface)<{ $isOpen: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 15%;
  z-index: 2;
  width: auto;
  padding: 0.75em;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  ${dropdownMotion}
`;

export const ScrollWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  gap: 1em;
  height: 60vh;
  overflow-y: auto;

  ${({ theme }) => theme.mq.tablet} {
    height: auto;
    overflow-y: visible;
    gap: 1.5em;
  }
`;

export const FilterGroup = styled.div<{ $variant?: string }>`
  width: 100%;

  & > div:not(:last-child) {
    margin-bottom: 0.5em;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    gap: ${({ $variant }) => ($variant === "dates" ? "0.1em" : $variant === "category" ? "1.5em" : $variant === "range" ? "0" : "0.75em")};
    flex: 1;

    & div {
      margin: 0;
    }
  }
`;

export const StyledLabel = styled(Label)`
  margin-top: 0;
  margin-bottom: 0.3em;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled(Button)`
  font-size: clamp(0.9rem, 2.2vw, 1.1rem);
  margin-right: 0.5em;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
`;
