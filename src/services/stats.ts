import {
  type DocumentData,
  DocumentReference,
  type DocumentSnapshot,
  doc,
  getDoc,
  increment,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.ts";
// utils
import { errorHandling } from "@/utils/errorHandling.ts";
import { showToast } from "@/utils/showToast.tsx";
// icons
import errorIcon from "@/assets/icons/error.svg";

type TransactionStatsPayload = {
  type: string;
  price: number;
  category: string;
};

export type Stats = {
  categoryID: string;
  name: string;
  total: number;
};
export type StatsResult = {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  categoryStats: Stats[];
};

type StatsUpdatePatch = {
  totalIncome?: ReturnType<typeof increment>;
  totalExpense?: ReturnType<typeof increment>;
  balance?: ReturnType<typeof increment>;
  categoryStats?: Stats[];
};

type StatsCallback = (snapshot: DocumentSnapshot<DocumentData>) => void;

export const createUserStats = async (
  ref: DocumentReference<DocumentData>,
  { type, price, category }: TransactionStatsPayload,
) => {
  const isIncome = type === "income";
  const isExpense = type === "expense";

  return await setDoc(ref, {
    totalIncome: isIncome ? price : 0,
    totalExpense: isExpense ? price : 0,
    balance: isIncome ? price : -price,
    categoryStats:
      type === "expense" ? [{ categoryID: category, name: category, total: price }] : [],
  });
};
const prepareGlobalStatsUpdate = (type: string, price: number) => {
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

  return updateData;
};

const prepareCategoryStatsUpdate = (currentStats: Stats[], category: string, price: number) => {
  const isCategoryExists = currentStats?.find((cat: Stats) => cat.categoryID === category);

  if (!isCategoryExists)
    return [...currentStats, { categoryID: category, name: category, total: price }];

  const updatedStats = currentStats?.map((stat) => {
    if (stat.categoryID === category) {
      return {
        ...stat,
        total: stat.total + price,
      };
    } else return stat;
  });

  return updatedStats;
};

const updateUserStats = async (
  ref: DocumentReference<DocumentData>,
  { type, price, category }: TransactionStatsPayload,
  snapshot: DocumentSnapshot<DocumentData>,
) => {
  const currentStats = snapshot.data()?.categoryStats ?? [];
  const globalUpdate = prepareGlobalStatsUpdate(type, price);
  const categoryUpdate = prepareCategoryStatsUpdate(currentStats, category, price);
  const updateData: StatsUpdatePatch = { ...globalUpdate, categoryStats: categoryUpdate };

  return await updateDoc(ref, updateData);
};

export const userStatsController = async (userID: string, data: TransactionStatsPayload) => {
  const docRef = doc(db, "userStats", userID);

  try {
    const documentSnapshots = await getDoc(docRef);
    if (!documentSnapshots.exists()) {
      return createUserStats(docRef, data);
    } else {
      return updateUserStats(docRef, data, documentSnapshots);
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
