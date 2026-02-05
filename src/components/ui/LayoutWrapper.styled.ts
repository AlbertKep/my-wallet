import styled from "styled-components";

export const LayoutWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1700px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 0 1em;
  }
`;
