import house from "../../assets/icons/house.svg";
import statistic from "../../assets/icons/statistic.svg";
import transaction from "../../assets/icons/transaction.svg";
import { Navigation, List, Item, StyledNavLink } from "./Navbar.styled.ts";
import { useTransactions } from "../../context/transactions/TransactionsContext.ts";

const Navbar = () => {
  const { transactions } = useTransactions();

  if (transactions.length === 0) return null;

  return (
    <Navigation>
      <List>
        <Item>
          <StyledNavLink to='/dashboard'>
            <img src={house} alt='house icon' />
            <span>Dashboard</span>
          </StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to='/statistics'>
            <img src={statistic} alt='statistic icon' />
            <span>Statistic</span>
          </StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to='/transactions'>
            <img src={transaction} alt='transaction icon' />
            <span>Transaction</span>
          </StyledNavLink>
        </Item>
      </List>
    </Navigation>
  );
};

export default Navbar;
