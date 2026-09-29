import { useState } from "react";
// types
import type { TransactionForm, TransactionFieldUpdate } from "../types/transaction";
import type { TransactionErrors } from "../utils/validation/transactionValidate";
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

  return { transaction, errors, updateField };
};
