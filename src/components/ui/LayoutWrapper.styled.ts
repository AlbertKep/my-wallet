import styled from "styled-components";

export const LayoutWrapper = styled.div<{ $hasNavbar: boolean }>`
  ${({ theme }) => theme.mq.desktop} {
    max-width: ${({ $hasNavbar }) => ($hasNavbar ? "1700px" : "auto")};
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 0 1em;
  }
`;
