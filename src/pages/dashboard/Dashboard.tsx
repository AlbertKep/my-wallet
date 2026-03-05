import { MainSection } from "../../components/ui/MainSection.styled.ts";
import BalanceSummary from "../../components/balanceSummary/BalanceSummary.tsx";
import TransactionList from "../../components/transactionList/TransactionList.tsx";
import { useTransactions } from "../../context/transactions/TransactionsContext.ts";

const Dashboard = () => {
  const { transactions, loading } = useTransactions();

  if (loading) return <p>Loading...</p>;
  return (
    <MainSection>
      <BalanceSummary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </MainSection>
  );
};

export default Dashboard;
