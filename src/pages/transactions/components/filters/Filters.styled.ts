import styled from "styled-components";
import { Surface } from "@/components/ui/Surface.styled.ts";
import { Label } from "@/components/ui/Label.styled.ts";

export const Wrapper = styled(Surface)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  gap: 1em;
  position: absolute;
  top: 80px;
  left: 0.25em;
  right: 0.25em;
  z-index: 2;
  width: auto;
  padding: 0.5em;

  ${({ theme }) => theme.mq.tablet} {
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
    gap: ${({ $variant }) => ($variant === "dates" ? "1.3em" : $variant === "category" ? "1.5em" : $variant === "range" ? "0" : "0.75em")};
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
