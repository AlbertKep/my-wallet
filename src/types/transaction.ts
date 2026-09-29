import { Timestamp } from "firebase/firestore";

export type TransactionFieldUpdate = {
  field: keyof TransactionForm;
  value: TransactionForm[keyof TransactionForm];
};

export type TransactionForm = {
  category: string;
  date: Timestamp;
  price: string;
  title: string;
  type: string;
  userID: string;
};
