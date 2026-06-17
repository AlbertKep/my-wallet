// styles
import { MainSection } from "../../components/ui/MainSection.styled.ts";
// components
import BalanceSummary from "@/components/balanceSummary/BalanceSummary.tsx";
import Loader from "@/components/loader/Loader.tsx";
import EmptyWallet from "@/components/emptyWallet/EmptyWallet.tsx";
import DashboardTransactionList from "@/components/dashboardTransactionList/DashboardTransactionList.tsx";

// context
import { useTransactions } from "@/context/transactions/TransactionsContext.ts";
import { useStats } from "@/context/stats/StatsContext.ts";

const Dashboard = () => {
  const { transactions, loading: transactionLoading } = useTransactions();
  const { stats, loading: statsLoading } = useStats();

  const isEmpty = transactions.length === 0 && stats === null;
  if (transactionLoading || statsLoading) return <Loader />;
  return (
    <MainSection>
      {isEmpty ? (
        <EmptyWallet />
      ) : (
        <>
          <BalanceSummary {...stats} />
          <DashboardTransactionList transactions={transactions.slice(0, 5)} />
        </>
      )}
    </MainSection>
  );
};

export default Dashboard;
