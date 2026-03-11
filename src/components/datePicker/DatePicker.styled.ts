import styled from "styled-components";

export const DateWrapper = styled.div`
  grid-area: date;
  margin-top: 0.7em;
`;
export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: clamp(0.8rem, 0.8rem + 0.5vw, 2rem);
  font-weight: 600;
  margin-bottom: 0.5em;
`;
export const DateInput = styled.input`
  all: unset;
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.warmBeige};
  border-radius: 12px;
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  font-weight: 500;
  margin-bottom: 0.7em;
  padding: 0.2em 0;
`;
