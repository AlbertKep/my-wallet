import { MainSection } from "../../components/ui/MainSection.styled.ts";
import BalanceSummary from "../../components/balanceSummary/BalanceSummary.tsx";
import TransactionList from "../../components/transactionList/TransactionList.tsx";

const Dashboard = () => {
  return (
    <MainSection>
      <BalanceSummary />
      <TransactionList />
    </MainSection>
  );
};

export default Dashboard;
