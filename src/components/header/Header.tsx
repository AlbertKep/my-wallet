import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.ts";
import Logo from "../logo/Logo.tsx";
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
