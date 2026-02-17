import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext.ts";
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
