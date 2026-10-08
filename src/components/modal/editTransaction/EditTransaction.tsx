import styled from "styled-components";
import { useState, useEffect, type FormEvent } from "react";
// styles
import { ButtonWrapper } from "../Modal.styled";
import { Button } from "@/components/ui/Button.styled";
// components
// import TransactionFormFields from "../transactionFormFields/TransactionFormFields";
import TransactionFormFields from "@/components/transactionFormFields/TransactionFormFields";
// types
import { type TransactionWithId } from "@/services/transactions";
import { type TransactionForm } from "@/types/transaction";
// hooks
import { useTransactionForm } from "@/hooks/useTransactionForm";

type EditTransactionProps = {
  selectedTransaction: TransactionWithId;
  onClose: () => void;
};

const EditTransaction: React.FC<EditTransactionProps> = ({ selectedTransaction, onClose }) => {
  const convertedTransaction: TransactionForm = {
    category: selectedTransaction.category,
    date: selectedTransaction.date,
    price: selectedTransaction.price.toString(),
    title: selectedTransaction.title,
    type: selectedTransaction.type,
    userID: selectedTransaction.userID,
  };
  const { transaction, errors, updateField } = useTransactionForm(convertedTransaction);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };
  if (transaction !== null)
    return (
      <div>
        <TransactionFormFields
          transaction={transaction}
          errors={errors}
          updateField={updateField}
          onSubmit={handleSubmit}
        >
          <ButtonWrapper>
            <Button type="button" onClick={onClose}>
              Close
            </Button>
            <Button>Save</Button>
          </ButtonWrapper>
        </TransactionFormFields>
      </div>
    );
};

export default EditTransaction;
