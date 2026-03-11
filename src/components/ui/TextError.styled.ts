import styled from "styled-components";

export const TextError = styled.p<{ $visible?: boolean }>`
  min-height: 1rem;
  margin: 0.5em 0;
  color: ${({ theme }) => theme.colors.red};
  font-size: clamp(0.6rem, 0.6rem + 0.5vw, 1rem);
  font-weight: 600;
  transition: opacity 0.2s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;
