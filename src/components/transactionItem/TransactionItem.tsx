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
// services
import { type Transaction } from "@/services/transactions";
// icons
import edit from "@/assets/icons/edit.svg";
import remove from "@/assets/icons/remove.svg";

type TransactionItemProps = Transaction & {
  itemRef?: React.Ref<HTMLLIElement>;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ category, title, date, price, type, itemRef }) => {
  return (
    <StyledItem ref={itemRef}>
      <ImageWrapper>
        <img src={getCategoryIcon(category)} alt={category} />
      </ImageWrapper>

      <InfoWrapper>
        <h5>{title}</h5>
        <time>{formatDate(date.seconds)}</time>
      </InfoWrapper>
      <StyledPrice $type={type}>{price} zł</StyledPrice>
    </StyledItem>
  );
};

export default TransactionItem;
