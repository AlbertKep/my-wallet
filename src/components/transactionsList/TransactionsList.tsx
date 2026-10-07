import { useRef, useEffect, useState } from "react";
// styles
import { StyledSectionWrapper, List } from "./TransactionList.styled.ts";
import { Heading } from "../ui/Heading.styled.ts";
// components
import TransactionItem from "@/components/transactionItem/TransactionItem.tsx";
import Modal from "../modal/Modal.tsx";
// types
import type { TransactionWithId } from "@/services/transactions";
import EditTransaction from "../modal/EditTransaction.tsx";
import RemoveTransaction from "../modal/RemoveTransaction.tsx";

type TransactionListProps = {
  transactions: TransactionWithId[];
  fetchNextPage: () => Promise<void>;
};

export type ModalTypes = "edit" | "remove";

const TransactionsList: React.FC<TransactionListProps> = ({ transactions, fetchNextPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes>("edit");
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionWithId | null>(null);
  const lastTransactionRef = useRef(null);
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  const handleClick = (type: ModalTypes, transaction: TransactionWithId) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
    setModalType(type);
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
            <TransactionItem
              key={transaction.transactionID}
              itemRef={lastTransactionRef}
              transaction={transaction}
              handleClick={handleClick}
            />
          ) : (
            <TransactionItem
              key={transaction.transactionID}
              transaction={transaction}
              handleClick={handleClick}
            />
          ),
        )}
        {isModalOpen && selectedTransaction !== null && (
          <Modal>
            {modalType === "edit" ? (
              <EditTransaction
                onClose={() => setIsModalOpen(false)}
                selectedTransaction={selectedTransaction}
              />
            ) : (
              <RemoveTransaction
                onClose={() => setIsModalOpen(false)}
                selectedTransaction={selectedTransaction}
              />
            )}
          </Modal>
        )}
      </List>
    </StyledSectionWrapper>
  );
};

export default TransactionsList;
