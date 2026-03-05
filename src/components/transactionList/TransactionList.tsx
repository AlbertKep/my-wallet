import { useNavigate } from "react-router-dom";
import { StyledSectionWrapper, ButtonWrapper } from "./TransactionList.styled.ts";
import { Heading } from "../ui/Heading.styled.ts";
import TransactionItem from "../transactionItem/TransactionItem.tsx";
import { Button } from "../ui/Button.styled.ts";
import { type TransactionWithId } from "../../services/transactions.ts";

type TransactionListProps = {
  transactions: TransactionWithId[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const navigate = useNavigate();

  return (
    <StyledSectionWrapper>
      <Heading>Last transactions</Heading>
      <ul>
        {transactions?.map((transaction) => (
          <TransactionItem key={transaction.transactionID} {...transaction} />
        ))}
      </ul>
      <ButtonWrapper>
        <Button onClick={() => navigate("/add")}>Add Transaction</Button>
        <Button onClick={() => navigate("/transactions")}>All Transactions</Button>
      </ButtonWrapper>
    </StyledSectionWrapper>
  );
};

export default TransactionList;
