import styled from "styled-components";

export const LayoutWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    margin: 0 1.5em;
  }
`;
