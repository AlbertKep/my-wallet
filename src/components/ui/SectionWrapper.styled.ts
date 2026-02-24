import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBeige};
  border-radius: 12px;
  margin: 0 0.5em;
  padding: 0 clamp(0.5em, 0.5em + 1vw, 2em);

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }
`;
