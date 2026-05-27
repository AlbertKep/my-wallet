import { useEffect, useState } from "react";
// services
import { getTransactionsPage } from "@/services/transactions.ts";
import { useAuth } from "@/context/auth/AuthContext.ts";
// types
import type { TransactionWithId } from "@/services/transactions.ts";
import { type QueryDocumentSnapshot, type DocumentData } from "firebase/firestore";
// utils
import { errorHandling } from "@/utils/errorHandling.ts";
// icons
import errorIcon from "@/assets/icons/error.svg";
import type { FiltersField } from "../Transactions.tsx";
import { showToast } from "@/utils/showToast.tsx";

const usePaginatedTransactions = (filters: FiltersField) => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<TransactionWithId[]>([]);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchFirstPage = async (id: string, filters: FiltersField) => {
    try {
      setError(false);
      setLoading(true);
      const { items, newLastVisible } = await getTransactionsPage(id, null, filters);
      setTransactions(items);
      setLastVisible(newLastVisible);
      setHasMore(items.length === 5);
      setLoading(false);
    } catch (error) {
      const message = errorHandling(error);
      setError(true);
      showToast(message, errorIcon);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  const fetchNextPage = async () => {
    try {
      if (loading || !hasMore || !lastVisible) return;
      setLoading(true);
      if (user) {
        const { items, newLastVisible } = await getTransactionsPage(user?.uid, lastVisible, filters);
        setTransactions((prev) => [...prev, ...items]);
        console.log(items);
        setLastVisible(newLastVisible);
        setHasMore(items.length === 5);
      }
    } catch (error) {
      const message = errorHandling(error);
      setError(true);
      showToast(message, errorIcon);
    } finally {
      setLoading(false);
    }
  };

  const retry = () => {
    if (!user) return;
    fetchFirstPage(user.uid, filters);
  };

  useEffect(() => {
    if (!user) return;
    setHasMore(true);
    setLastVisible(null);
    setTransactions([]);
    setInitialLoading(true);
    fetchFirstPage(user.uid, filters);
  }, [user, filters]);

  return { transactions, lastVisible, hasMore, fetchNextPage, retry, loading, initialLoading, error };
};

export default usePaginatedTransactions;
