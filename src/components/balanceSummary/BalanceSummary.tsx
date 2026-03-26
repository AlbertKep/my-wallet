import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { type TransactionWithId } from "../../services/transactions.ts";

type TransactionListProps = {
  transactions: TransactionWithId[];
};

export type BalanceChartDataProps = {
  name: string;
  value: number;
  fill: string;
};
const BalanceSummary: React.FC<TransactionListProps> = ({ transactions }) => {
  const theme = useTheme();
  const [balance, setBalance] = useState(0);
  const [balanceChartData, setBalanceChartData] = useState<BalanceChartDataProps[]>([]);

  useEffect(() => {
    const getBalance = () => {
      const { income, expense } = transactions.reduce(
        (total: { income: number; expense: number }, currentValue) => {
          if (currentValue.type === "income") total.income += currentValue.price;
          if (currentValue.type === "expense") total.expense += currentValue.price;
          return total;
        },
        { income: 0, expense: 0 },
      );
      setBalance(income - expense);
      const data = [
        { name: "income", value: income, fill: theme.colors.green },
        { name: "expense", value: expense, fill: theme.colors.red },
      ];

      setBalanceChartData(data);
    };
    getBalance();
  }, [transactions]);

  return (
    <Wrapper>
      <TextWrapper>
        <Heading>Main Balance</Heading>
        <Balance>{balance} zł</Balance>
      </TextWrapper>

      <ImgWrapper>
        <img src={balanceChart} alt='Balance chart icon' />
      </ImgWrapper>
    </Wrapper>
  );
};

export default BalanceSummary;
