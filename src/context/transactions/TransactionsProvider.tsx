import { useState, useEffect, type ReactNode } from "react";
import { subscribeToTransactions } from "../../services/transactions.ts";
import type { TransactionWithId } from "../../services/transactions.ts";
import { TransactionsContext } from "./TransactionsContext.ts";
import { useAuth } from "../auth/AuthContext.ts";
type TransactionsContextProps = {
  children: ReactNode;
};

export const TransactionsProvider: React.FC<TransactionsContextProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setTransactions([]);
      return;
    }

    setLoading(true);

    const unsubscribe = subscribeToTransactions(user.uid, (snapshot) => {
      const items: TransactionWithId[] = [];

      snapshot.forEach((doc) => {
        items.push({ transactionID: doc.id, ...doc.data() } as TransactionWithId);
      });

      setTransactions(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  return <TransactionsContext.Provider value={{ transactions, loading }}>{children}</TransactionsContext.Provider>;
};
