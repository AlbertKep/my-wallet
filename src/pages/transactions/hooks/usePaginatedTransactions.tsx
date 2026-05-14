import { useEffect, useState } from "react";
// services
import { getTransactionsPage } from "@/services/transactions.ts";
import { useAuth } from "@/context/auth/AuthContext.ts";
// types
import type { TransactionWithId } from "@/services/transactions.ts";
import { type QueryDocumentSnapshot, type DocumentData } from "firebase/firestore";

const usePaginatedTransactions = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<TransactionWithId[]>([]);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const fetchFirstPage = async (id: string) => {
    try {
      setLoading(true);
      const { items, newLastVisible } = await getTransactionsPage(id, null);
      setTransactions(items);
      setLastVisible(newLastVisible);
      setHasMore(items.length === 5);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      } else {
        console.error("Unexpected error", error);
      }
    }
  };

  const fetchNextPage = async () => {
    try {
      if (loading || !hasMore || !lastVisible) return;
      setLoading(true);
      if (user) {
        const { items, newLastVisible } = await getTransactionsPage(user?.uid, lastVisible);
        setTransactions((prev) => [...prev, ...items]);
        console.log(items);
        setLastVisible(newLastVisible);
        setHasMore(items.length === 5);
        setLoading(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);
      } else {
        console.error("Unexpected error", error);
      }
    }
  };
  useEffect(() => {
    if (!user) return;
    fetchFirstPage(user.uid);
  }, [user]);

  return { transactions, lastVisible, hasMore, fetchNextPage };
};

export default usePaginatedTransactions;
