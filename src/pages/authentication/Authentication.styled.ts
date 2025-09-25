import styled from "styled-components";
import { Button } from "../../components/ui/Button.ts";

export const StyledForm = styled.form`
  margin: 2em 1em;
`;

export const BackgroundWrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightBeige};
  padding: 1em;
  border-radius: 20px;
`;

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

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 2em;
  padding: 1em 0;
`;

export const AuthLinkHint = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
  font-weight: 600;
  text-align: center;
  margin-top: 2em;
`;

export const TextError = styled.p<{ $visible?: boolean }>`
  min-height: 1em;
  color: ${({ theme }) => theme.colors.red};
  font-size: clamp(0.6rem, 0.6rem + 0.5vw, 1rem);
  transition: opacity 0.2s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;
