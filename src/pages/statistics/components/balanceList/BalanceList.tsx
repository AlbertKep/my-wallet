import { List, BalanceItem, Content, Amount } from "./BalanceList.styled.ts";

// icons
import income from "@/assets/icons/income.svg";
import expense from "@/assets/icons/expense.svg";
import balanceIcon from "@/assets/icons/balance.svg";
// types
import { type StatsResult } from "@/services/stats.ts";

type StatItem = {
  type: string;
  label: string;
  icon: string;
  amount: number;
};

const BalanceList: React.FC<StatsResult> = ({ totalIncome, totalExpense, balance }) => {
  const statsType: StatItem[] = [
    { type: "income", label: "Income", icon: income, amount: totalIncome },
    { type: "expense", label: "Expense", icon: expense, amount: totalExpense },
    { type: "balance", label: "Balance", icon: balanceIcon, amount: balance },
  ];
  return (
    <List>
      {statsType?.map(({ type, label, icon, amount }) => (
        <BalanceItem key={type}>
          <Content>
            <img src={icon} alt={type} />
            <h5>{label}</h5>
          </Content>

          <Amount $type={type}>{amount}zł</Amount>
        </BalanceItem>
      ))}
    </List>
  );
};

export default BalanceList;
