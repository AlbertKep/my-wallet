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
    await addDoc(collection(db, "transactions"), { ...newTransaction, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
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
): Promise<TransactionsPageResult> => {
  try {
    const transactionsPageQuery =
      lastVisible === null
        ? query(collection(db, "transactions"), where("userID", "==", userID), orderBy("createdAt", "desc"), limit(5))
        : query(
            collection(db, "transactions"),
            where("userID", "==", userID),
            orderBy("createdAt", "desc"),
            startAfter(lastVisible),
            limit(5),
          );

    const documentSnapshots = await getDocs(transactionsPageQuery);
    const items = documentSnapshots.docs.map((doc) => ({
      transactionID: doc.id,
      ...doc.data(),
    })) as TransactionWithId[];

    const newLastVisible = documentSnapshots.docs.length > 0 ? documentSnapshots.docs[documentSnapshots.docs.length - 1] : null;
    return { items, newLastVisible };
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
