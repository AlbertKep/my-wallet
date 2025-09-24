import wallet from "../../assets/icons/wallet.svg";
import { Button } from "../ui/Button.ts";
import { StyledHeader, Wrapper, Heading, ButtonWrapper } from "./Header.ts";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <img src={wallet} alt="wallet icon" />
        <Heading>My Wallet</Heading>
      </Wrapper>
      <ButtonWrapper>
        <Button>Logout</Button>
      </ButtonWrapper>
    </StyledHeader>
  );
};

export default Header;
