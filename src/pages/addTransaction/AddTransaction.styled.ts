import styled from "styled-components";
import { Button } from "../../components/ui/Button.styled.ts";
import FormField from "../../components/formField/FormField.tsx";

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const FormWrapper = styled.form`
  ${({ theme }) => theme.mq.tablet} {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    gap: 0 100px;
    grid-template-areas:
      "transaction  category"
      "amount  type"
      "add date";
  }
  padding: 0 0.2em;
`;

export const TransactionFormField = styled(FormField)`
  grid-area: transaction;
`;
export const PriceFormField = styled(FormField)`
  grid-area: amount;
`;

export const StyledButton = styled(Button)`
  grid-area: add;
  max-width: 250px;
  font-size: clamp(0.8rem, 0.8rem + 0.4vw, 1.8rem);
  margin-bottom: 0.7em;

  ${({ theme }) => theme.mq.tablet} {
    align-self: end;
  }
`;
