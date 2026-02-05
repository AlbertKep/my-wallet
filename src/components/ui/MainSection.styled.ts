import styled from "styled-components";

export const MainSection = styled.section`
  flex: 4;
  padding-bottom: 1rem;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    height: clamp(400px, 70vh, 1000px);
  }
`;
