import styled from "styled-components";

export const List = styled.ul`
  grid-area: balance;
  display: flex;
  justify-content: space-around;
  gap: 0 0.5em;
  font-size: clamp(0.8rem, 0.8rem + 0.4vw, 1.8rem);
`;

export const BalanceItem = styled.li`
  flex: 1;
  color: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Amount = styled.p<{ $type: string }>`
  color: ${({ theme, $type }) =>
    $type === "income" ? theme.colors.green : $type === "expense" ? theme.colors.red : theme.colors.primaryViolet};
  font-size: clamp(1rem, 0.8rem + 0.4vw, 1.8rem);
  font-weight: 500;
  margin: 0 1em 0.5em;
`;
