import { useNavigate } from "react-router-dom";
import { Wrapper, StyledHeading, ImgWrapper } from "./EmptyWallet.styled.ts";
import { Button } from "../ui/Button.styled";
import emptyWallet from "../../assets/icons/empty_wallet.svg";

const EmptyWallet = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <StyledHeading>No transactions</StyledHeading>
      <ImgWrapper>
        <img src={emptyWallet} alt='empty wallet' />
      </ImgWrapper>
      <Button onClick={() => navigate("/add")}>Add Transaction</Button>
    </Wrapper>
  );
};

export default EmptyWallet;
