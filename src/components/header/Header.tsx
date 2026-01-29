import wallet from "../../assets/icons/wallet.svg";
import { Button } from "../ui/Button.styled.ts";
import { StyledHeader, Wrapper, Heading, ButtonWrapper } from "./Header.styled.ts";

const Header = () => {
  console.log("Header mounted");
  return (
    <StyledHeader>
      <Logo />
      <ButtonWrapper>
        <Button>Logout</Button>
      </ButtonWrapper>
    </StyledHeader>
  );
};

export default Header;
