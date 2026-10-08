import styled from "styled-components";
// styles
import { Wrapper, TransactionDetails, TransactionIdentity } from "./RemoveTransaction.styled";
import { ButtonWrapper } from "../Modal.styled";
import { Button } from "@/components/ui/Button.styled";
// types
import { type TransactionWithId } from "@/services/transactions";
// utils
import { getCategoryIcon } from "@/utils/getCategoryIcon";

type TransactionListProps = {
  selectedTransaction: TransactionWithId;
  onClose: () => void;
};
const RemoveTransaction: React.FC<TransactionListProps> = ({ selectedTransaction, onClose }) => {
  return (
    <Wrapper>
      <h3>Are you sure you want to remove this transaction?</h3>
      <TransactionDetails>
        <TransactionIdentity>
          <img
            src={getCategoryIcon(selectedTransaction.category)}
            alt={selectedTransaction.category}
          />
          <strong>{selectedTransaction.title}</strong>
        </TransactionIdentity>
        <p>{selectedTransaction.price} zł</p>
      </TransactionDetails>
      <ButtonWrapper>
        <Button onClick={onClose}>Close</Button>
        <Button>Yes</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default RemoveTransaction;
