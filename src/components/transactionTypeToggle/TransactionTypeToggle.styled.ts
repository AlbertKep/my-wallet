import styled from "styled-components";

export const TypeWrapper = styled.div`
  grid-area: type;
  align-self: center;
  font-size: clamp(0.6rem, 0.8rem + 0.5vw, 2rem);
  background-color: ${({ theme }) => theme.colors.warmBeige};
  border-radius: 12px;
  padding: 10px;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    margin: 1em 0;
  }
`;

export const TypeOption = styled.button<{ $active: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 0 1em;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.lightBeige : "transparent")};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBeige};
  }
`;
