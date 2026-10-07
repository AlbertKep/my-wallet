// styles
import {
  ControllerWrapper,
  ImageWrapper,
  InfoWrapper,
  StyledItem,
  StyledPrice,
} from "./TransactionItem.styled";
// utils
import { formatDate } from "@/utils/dateConverters";
import { getCategoryIcon } from "@/utils/getCategoryIcon";
// types
import { type TransactionWithId } from "@/services/transactions";
import { type ModalTypes } from "../transactionsList/TransactionsList";
// icons
import edit from "@/assets/icons/edit.svg";
import remove from "@/assets/icons/remove.svg";

type TransactionItemProps = {
  itemRef?: React.Ref<HTMLLIElement>;
  transaction: TransactionWithId;
  handleClick: (value: ModalTypes, transaction: TransactionWithId) => void;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, itemRef, handleClick }) => {
  return (
    <StyledItem ref={itemRef}>
      <ImageWrapper>
        <img src={getCategoryIcon(transaction.category)} alt={transaction.category} />
      </ImageWrapper>

      <InfoWrapper>
        <h5>{transaction.title}</h5>
        <time>{formatDate(transaction.date.seconds)}</time>
      </InfoWrapper>
      <StyledPrice $type={transaction.type}>{transaction.price} zł</StyledPrice>
      <ControllerWrapper>
        <button onClick={() => handleClick("edit", transaction)}>
          <img src={edit} alt="edit transaction" />
        </button>
        <button onClick={() => handleClick("remove", transaction)}>
          <img src={remove} alt="remove transaction" />
        </button>
      </ControllerWrapper>
    </StyledItem>
  );
};

export default TransactionItem;
