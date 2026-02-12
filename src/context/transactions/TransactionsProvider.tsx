import { useState, useEffect, type ReactNode } from "react";
import { subscribeToTransactions } from "../../services/transactions.ts";
import type { Transaction } from "../../services/transactions.ts";
import { TransactionsContext } from "./TransactionsContext.ts";
import { useAuth } from "../auth/AuthContext.ts";
type TransactionsContextProps = {
  children: ReactNode;
};

export const TransactionsProvider: React.FC<TransactionsContextProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setTransactions([]);
      return;
    }

    setLoading(true);

    const unsubscribe = subscribeToTransactions(user.uid, (snapshot) => {
      const items: Transaction[] = [];

      snapshot.forEach((doc) => {
        items.push(doc.data() as Transaction);
      });

      setTransactions(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  return <TransactionsContext.Provider value={{ transactions, loading }}>{children}</TransactionsContext.Provider>;
};
