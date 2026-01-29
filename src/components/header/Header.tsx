import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.ts";
import Logo from "../logo/Logo.tsx";
import { Button } from "../ui/Button.styled.ts";
import { StyledHeader, ButtonWrapper } from "./Header.styled.ts";

const Header = () => {
  const { logoutUser } = useAuth();

  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/signin");
  };
  console.log("Header mounted");
  return (
    <StyledHeader>
      <Logo />
      <ButtonWrapper>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonWrapper>
    </StyledHeader>
  );
};

export default Header;
