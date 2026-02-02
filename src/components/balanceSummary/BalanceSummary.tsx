import balanceChart from "../../assets/icons/balance_chart.svg";
import { Wrapper, TextWrapper, Heading, Balance, ImgWrapper } from "./BalanceSummary.styled.ts";

const BalanceSummary = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Heading>Main Balance</Heading>
        <Balance>3200 zł</Balance>
      </TextWrapper>

      <ImgWrapper>
        <img src={balanceChart} alt='Balance chart icon' />
      </ImgWrapper>
    </Wrapper>
  );
};

export default BalanceSummary;
