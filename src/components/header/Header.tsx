import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext.ts";
import Logo from "../logo/Logo.tsx";
import { Button } from "../ui/Button.styled.ts";
import { StyledHeader, ButtonWrapper } from "./Header.styled.ts";
import { showToast } from "../../utils/showToast.tsx";
import success from "../../assets/icons/success.svg";

const Header = () => {
  const { logoutUser } = useAuth();

  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    showToast("You have successfuly logged out", success);
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
