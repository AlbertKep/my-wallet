// styles
import { Button } from "../ui/Button.styled.ts";
import { EmptyWrapper } from "../ui/EmptyWrapper.styled.ts";
// components
import EmptyState from "../emptyState/EmptyState.tsx";
// icons
import errorIcon from "@/assets/icons/error.svg";

type ErrorProps = {
  message: string;
  onRetry: () => void;
};
const ErrorState: React.FC<ErrorProps> = ({ message, onRetry }) => {
  return (
    <EmptyWrapper>
      <EmptyState heading={message} icon={errorIcon} />
      <Button onClick={() => onRetry()}>Try Again</Button>
    </EmptyWrapper>
  );
};

export default ErrorState;
