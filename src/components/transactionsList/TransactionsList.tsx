import { useRef, useEffect } from "react";
// styles
import { StyledSectionWrapper, List } from "./TransactionList.styled.ts";
import { Heading } from "../ui/Heading.styled.ts";
// components
import TransactionItem from "@/components/transactionItem/TransactionItem.tsx";
// types
import type { TransactionWithId } from "@/services/transactions";

type TransactionListProps = {
  transactions: TransactionWithId[];
  fetchNextPage: () => Promise<void>;
};
const TransactionsList: React.FC<TransactionListProps> = ({ transactions, fetchNextPage }) => {
  const lastTransactionRef = useRef(null);
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  const options = {
    root: document.querySelector("[data-list]"),
    rootMargin: "0px",
    threshold: 0.1,
  };
  useEffect(() => {
    const currentRef = lastTransactionRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [transactions]);

  return (
    <StyledSectionWrapper>
      <Heading>Transactions</Heading>
      <List data-list>
        {transactions?.map((transaction, index) =>
          index === transactions.length - 1 ? (
            <TransactionItem key={transaction.transactionID} itemRef={lastTransactionRef} {...transaction} />
          ) : (
            <TransactionItem key={transaction.transactionID} {...transaction} />
          ),
        )}
      </List>
    </StyledSectionWrapper>
  );
};

export default TransactionsList;
