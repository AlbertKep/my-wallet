// styles
import { MainSection } from "../../components/ui/MainSection.styled.ts";
// components
import BalanceSummary from "../../components/balanceSummary/BalanceSummary.tsx";
import Loader from "../../components/loader/Loader.tsx";
import EmptyWallet from "../../components/emptyWallet/EmptyWallet.tsx";
import TransactionList from "../../components/transactionList/TransactionList.tsx";

import { useTransactions } from "../../context/transactions/TransactionsContext.ts";

const Dashboard = () => {
  const { transactions, loading } = useTransactions();
  const isEmpty = transactions.length === 0;
  if (loading) return <Loader />;
  return (
    <MainSection>
      {isEmpty ? (
        <EmptyWallet />
      ) : (
        <>
          <BalanceSummary transactions={transactions} />
          <TransactionList transactions={transactions.slice(0, 5)} />
        </>
      )}
    </MainSection>
  );
};

export default Dashboard;
