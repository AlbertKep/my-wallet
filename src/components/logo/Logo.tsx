import wallet from "../../assets/icons/wallet.svg";
import { Wrapper, Heading } from "./Logo.styled";
const Logo = () => {
  return (
    <Wrapper>
      <img src={wallet} alt='wallet icon' />
      <Heading>My Wallet</Heading>
    </Wrapper>
  );
};

export default Logo;
