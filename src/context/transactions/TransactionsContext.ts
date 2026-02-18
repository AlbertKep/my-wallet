import type { TransactionWithId } from "../../services/transactions.ts";
import { createSafeContext } from "../../utils/createContextHook.ts";

interface TransactionsContextType {
  transactions: TransactionWithId[];
  loading: boolean;
}

const [TransactionsContext, useTransactions] = createSafeContext<TransactionsContextType>(
  "useTransactions must be used inside TransactionsProvider",
);

export { TransactionsContext, useTransactions };
