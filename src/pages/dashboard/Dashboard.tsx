import { MainSection } from "../../components/ui/MainSection.styled.ts";
import BalanceSummary from "../../components/balanceSummary/BalanceSummary.tsx";
import TransactionList from "../../components/transactionList/TransactionList.tsx";
import { useTransactions } from "../../context/transactions/TransactionsContext.ts";
import Loader from "../../components/loader/Loader.tsx";

const Dashboard = () => {
  const { transactions, loading } = useTransactions();

  if (loading) return <Loader />;
  return (
    <MainSection>
      <BalanceSummary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </MainSection>
  );
};

export default Dashboard;
