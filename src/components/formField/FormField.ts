import styled from "styled-components";

export const FieldsWrapper = styled.div`
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 600;
  padding-bottom: 0.4em;
`;

export const Label = styled.label`
  display: block;
  font-size: clamp(0.8rem, 0.8rem + 0.5vw, 2rem);
  padding: 1em 0;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.darkBlue}`};
  outline: none;
  width: 100%;
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
  color: ${({ theme }) => theme.colors.darkBlue};
  padding-bottom: 0.5em;
`;
