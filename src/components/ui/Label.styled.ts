import styled from "styled-components";

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: clamp(0.8rem, 0.8rem + 0.5vw, 2rem);
  font-weight: 600;
  padding: 0.2em 0;
`;
