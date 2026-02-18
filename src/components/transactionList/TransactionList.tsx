import { useNavigate } from "react-router-dom";
import { Wrapper, Heading, ButtonWrapper } from "./TransactionList.styled.ts";
import TransactionItem from "../transactionItem/TransactionItem.tsx";
import { Button } from "../ui/Button.styled.ts";
import { type TransactionWithId } from "../../services/transactions.ts";

type TransactionListProps = {
  transactions: TransactionWithId[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Heading>Last transactions</Heading>
      <ul>
        {transactions?.map((transaction) => (
          <TransactionItem key={transaction.transactionID} {...transaction} />
        ))}
      </ul>
      <ButtonWrapper>
        <Button>Add Transaction</Button>
        <Button onClick={() => navigate("/transactions")}>All Transactions</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TransactionList;
