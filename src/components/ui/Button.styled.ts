import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(0.6rem, 0.8rem + 1vw, 1.5rem);
  font-weight: 600;
  border-radius: 20px;
  padding: 0.5em 1em;
`;
