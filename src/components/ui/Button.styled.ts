import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(0.6rem, 0.8rem + 1vw, 1.5rem);
  font-weight: 600;
  border-radius: 12px;
  padding: 0.5em 1em;
`;
