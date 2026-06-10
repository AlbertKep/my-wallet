import { db } from "./firebase.ts";
import {
  type DocumentSnapshot,
  type DocumentData,
  doc,
  setDoc,
  getDoc,
  DocumentReference,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";
// utils
import { errorHandling } from "@/utils/errorHandling.ts";
import { showToast } from "@/utils/showToast.tsx";
// icons
import errorIcon from "@/assets/icons/error.svg";

type TransactionStatsPayload = {
  type: string;
  price: number;
};

export type StatsResult = {
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

type StatsUpdatePatch = {
  totalIncome?: ReturnType<typeof increment>;
  totalExpense?: ReturnType<typeof increment>;
  balance?: ReturnType<typeof increment>;
};

type StatsCallback = (snapshot: DocumentSnapshot<DocumentData>) => void;

export const createUserStats = async (ref: DocumentReference<DocumentData>, { type, price }: TransactionStatsPayload) => {
  const isIncome = type === "income";
  const isExpense = type === "expense";

  return await setDoc(ref, {
    totalIncome: isIncome ? price : 0,
    totalExpense: isExpense ? price : 0,
    balance: isIncome ? price : -price,
  });
};

const updateUserStats = async (ref: DocumentReference<DocumentData>, { type, price }: TransactionStatsPayload) => {
  const isIncome = type === "income";
  const isExpense = type === "expense";
  const updateData: StatsUpdatePatch = {};

  if (isIncome) {
    updateData.totalIncome = increment(price);
    updateData.balance = increment(price);
  }

  if (isExpense) {
    updateData.totalExpense = increment(price);
    updateData.balance = increment(-price);
  }
  return await updateDoc(ref, updateData);
};

export const userStatsController = async (userID: string, data: TransactionStatsPayload) => {
  const docRef = doc(db, "userStats", userID);

  try {
    const documentSnapshots = await getDoc(docRef);
    if (!documentSnapshots.exists()) {
      return createUserStats(docRef, data);
    } else {
      return updateUserStats(docRef, data);
    }
  } catch (error) {
    const message = errorHandling(error);
    showToast(message, errorIcon);
  }
};

export const subscribeToUserStats = (userID: string, callback: StatsCallback) => {
  const docRef = doc(db, "userStats", userID);

  return onSnapshot(docRef, callback);
};
