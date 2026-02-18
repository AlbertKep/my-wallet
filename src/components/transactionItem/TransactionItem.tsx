import { StyledItem, StyledPrice, ImageWrapper, InfoWrapper } from "./TransactionItem.styled.ts";
import { type Transaction } from "../../services/transactions.ts";
import { getCategoryIcon } from "../../utils/getCategoryIcon.ts";
import { formatDate } from "../../utils/formatDate.ts";

const TransactionItem: React.FC<Transaction> = ({ category, title, date, price, type }) => {
  return (
    <StyledItem>
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
