import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  overflow-y: auto;
  max-height: 480px;
  ${({ theme }) => theme.mq.bigDesktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(0, auto);
    gap: 1em;
    grid-template-areas:
      "balance balance balance"
      "chart chart chart"
      "category-breakdown category-breakdown other";
  }
`;
