import { useNavigate } from "react-router-dom";
// styles
import { Button } from "../ui/Button.styled.ts";
import { EmptyWrapper } from "../ui/EmptyWrapper.styled.ts";
// components
import EmptyState from "../emptyState/EmptyState.tsx";
// icons
import emptyWallet from "@/assets/icons/empty_wallet.svg";

const EmptyWallet = () => {
  const navigate = useNavigate();

  return (
    <EmptyWrapper>
      <EmptyState heading='No transactions' icon={emptyWallet} />
      <Button onClick={() => navigate("/add")}>Add Transaction</Button>
    </EmptyWrapper>
  );
};

export default EmptyWallet;
