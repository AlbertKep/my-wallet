import { Heading } from "@/components/ui/Heading.styled";
import { Surface } from "@/components/ui/Surface.styled";
import styled from "styled-components";

export const Wrapper = styled(Surface)`
  grid-area: category-breakdown;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.5em;
`;

export const Controller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: clamp(1rem, 1rem + 0.8vw, 1.5rem);
`;
