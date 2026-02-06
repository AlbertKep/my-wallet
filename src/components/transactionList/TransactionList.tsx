import { useNavigate } from "react-router-dom";
import { Wrapper, Heading, ButtonWrapper } from "./TransactionList.styled.ts";
import TransactionItem from "../transactionItem/TransactionItem.tsx";
import { Button } from "../ui/Button.styled.ts";

// transaction icons
import entertainment from "../../assets/icons/transactionIcons/entertainment.svg";
import food from "../../assets/icons/transactionIcons/food.svg";
import salary from "../../assets/icons/transactionIcons/salary.svg";
// import transport from "../../assets/icons/transactionIcons/transport.svg";

const transactions = [
  { id: 1, icon: food, alt: "Food icon", title: "Biedronka", category: "Groceries", price: -54.2, date: "2026-01-12" },
  { id: 2, icon: salary, alt: "Salary icon", title: "Wypłata", category: "Income", price: 4200, date: "2026-01-10" },
  { id: 3, icon: entertainment, alt: "Entertainment icon", title: "Netflix", category: "Subscription", price: -29, date: "2026-01-08" },
  { id: 4, icon: entertainment, alt: "Entertainment icon", title: "Netflix", category: "Subscription", price: -29, date: "2026-01-08" },
  { id: 5, icon: entertainment, alt: "Entertainment icon", title: "Netflix", category: "Subscription", price: -29, date: "2026-01-08" },
  // { id: 3, icon: entertainment, alt: "Entertainment icon", title: "Netflix", category: "Subscription", price: -29, date: "2026-01-08" },
];

const TransactionList = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Heading>Last transactions</Heading>
      <ul>
        {transactions?.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
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
