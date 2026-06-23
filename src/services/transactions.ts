import { db } from "./firebase.ts";
import {
  collection,
  query,
  where,
  addDoc,
  serverTimestamp,
  type Timestamp,
  type QuerySnapshot,
  type QueryDocumentSnapshot,
  type DocumentData,
  onSnapshot,
  orderBy,
  limit,
  getDocs,
  startAfter,
  QueryConstraint,
} from "firebase/firestore";

import { userStatsController } from "./stats.ts";
import type { FiltersField } from "@/pages/transactions/Transactions.tsx";
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

type TransactionsPageResult = {
  items: TransactionWithId[];
  newLastVisible: QueryDocumentSnapshot<DocumentData> | null;
};
export const subscribeToTransactions = (userID: string, callback: TransactionsCallback) => {
  const transactionQuery = query(collection(db, "transactions"), where("userID", "==", userID), orderBy("createdAt", "desc"));

  return onSnapshot(transactionQuery, callback);
};

export const addTransaction = async (newTransaction: Transaction) => {
  try {
    const { type, price, category } = newTransaction;
    await addDoc(collection(db, "transactions"), { ...newTransaction, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    userStatsController(newTransaction.userID, { type, price, category });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      alert(error.message);
    } else {
      console.error("Unexpected error", error);
    }
    return null;
  }
};

export const getTransactionsPage = async (
  userID: string,
  lastVisible: QueryDocumentSnapshot<DocumentData> | null,
  activeFilters: FiltersField,
): Promise<TransactionsPageResult> => {
  const { from, to, category, type, min, max } = activeFilters;

  const conditions: QueryConstraint[] = [where("userID", "==", userID)];
  if (category !== "all") conditions.push(where("category", "==", category));
  if (type !== "all") conditions.push(where("type", "==", type));

  let filtersQuery = query(collection(db, "transactions"), ...conditions, orderBy("createdAt", "desc"), limit(5));

  if (lastVisible !== null) {
    filtersQuery = query(collection(db, "transactions"), ...conditions, orderBy("createdAt", "desc"), startAfter(lastVisible), limit(5));
  }

  try {
    const documentSnapshots = await getDocs(filtersQuery);
    const items = documentSnapshots.docs.map((doc) => ({
      transactionID: doc.id,
      ...doc.data(),
    })) as TransactionWithId[];

    const filteredItems = items.filter((item) => {
      let pass = true;
      if (from !== null && item.date < from) pass = false;

      if (to !== null && item.date > to) pass = false;
      if (min !== "" && item.price < Number(min)) pass = false;
      if (max !== "" && item.price > Number(max)) pass = false;

      return pass;
    });
    const newLastVisible = documentSnapshots.docs.length > 0 ? documentSnapshots.docs[documentSnapshots.docs.length - 1] : null;
    return { items: filteredItems, newLastVisible };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      alert(error.message);
    } else {
      console.error("Unexpected error", error);
    }
    return { items: [], newLastVisible: null };
  }
};
