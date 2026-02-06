import { StyledItem, ImageWrapper, InfoWrapper } from "./TransactionItem.styled.ts";

type TransactionProps = {
  icon: string;
  alt: string;
  title: string;
  date: string;
  price: number;
};
const TransactionItem: React.FC<TransactionProps> = ({ icon, alt, title, date, price }) => {
  return (
    <StyledItem>
      <ImageWrapper>
        <img src={icon} alt={alt} />
      </ImageWrapper>

      <InfoWrapper>
        <h5>{title}</h5>
        <time>{date}</time>
      </InfoWrapper>
      <p>{price} zł</p>
    </StyledItem>
  );
};

export default TransactionItem;
