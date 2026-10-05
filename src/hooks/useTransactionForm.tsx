import { useState } from "react";
// types
import type { TransactionForm, TransactionFieldUpdate } from "../types/transaction";
import {
  transactionValidate,
  type TransactionErrors,
} from "../utils/validation/transactionValidate";
export const useTransactionForm = ({
  category,
  date,
  price,
  title,
  type,
  userID,
}: TransactionForm) => {
  const [transaction, setTransaction] = useState<TransactionForm>({
    category,
    date,
    price,
    title,
    type,
    userID,
  });
  const [errors, setErrors] = useState<TransactionErrors>();

  const updateField = ({ field, value }: TransactionFieldUpdate) => {
    if (field === "title" || field === "price") setErrors((prev) => ({ ...prev, [field]: "" }));
    setTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const result = transactionValidate(transaction.title, transaction.price);
    setErrors(result.hasErrors ? result.errors : undefined);
    return !result.hasErrors;
  };
  return { transaction, errors, updateField, validateForm };
};
