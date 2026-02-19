import balanceChart from "../../assets/icons/balance_chart.svg";
import { Wrapper, TextWrapper, Heading, Balance, ImgWrapper } from "./BalanceSummary.styled.ts";
import { type TransactionWithId } from "../../services/transactions.ts";
import { useState, useEffect } from "react";

type TransactionListProps = {
  transactions: TransactionWithId[];
};

const BalanceSummary: React.FC<TransactionListProps> = ({ transactions }) => {
  const [balance, setBalance] = useState(0);

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
