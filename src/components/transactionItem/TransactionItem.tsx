// styles
import { StyledItem, StyledPrice, ImageWrapper, InfoWrapper } from "./TransactionItem.styled.ts";
// utils
import { getCategoryIcon } from "@/utils/getCategoryIcon.ts";
import { formatDate } from "@/utils/dateConverters.ts";

import { type Transaction } from "@/services/transactions.ts";

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
