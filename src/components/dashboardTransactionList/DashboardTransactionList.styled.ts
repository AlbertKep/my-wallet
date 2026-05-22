import styled from "styled-components";
import { SectionWrapper } from "../ui/SectionWrapper.styled.ts";

export const StyledSectionWrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.colors.lightBeige};
  border-radius: 12px;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }

  ul {
    overflow-y: scroll;
    height: clamp(180px, calc(15vh + 10vw), 400px);
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 0.5em;
  text-align: center;

  button {
    font-size: clamp(0.8rem, 0.8rem + 0.4vw, 1.8rem);
    margin: 0 0.3em;
  }
`;
