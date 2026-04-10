export type TransactionType = {
  id: string;
  label: string;
};
export const transactionTypes: TransactionType[] = [
  { id: "income", label: "Income" },
  { id: "expense", label: "Expense" },
];
