import { db } from "./firebase.ts";
import {
  collection,
  query,
  where,
  limit,
  addDoc,
  serverTimestamp,
  type Timestamp,
  type QuerySnapshot,
  type DocumentData,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

export type Transaction = {
  category: string;
  date: Timestamp;
  price: number;
  title: string;
  type: string;
  userID: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
};
export type TransactionWithId = Transaction & { transactionID: string };

type TransactionsCallback = (snapshot: QuerySnapshot<DocumentData>) => void;

export const subscribeToTransactions = (userID: string, callback: TransactionsCallback) => {
  const transactionQuery = query(collection(db, "transactions"), where("userID", "==", userID), orderBy("createdAt", "desc"), limit(5));

  return onSnapshot(transactionQuery, callback);
};
