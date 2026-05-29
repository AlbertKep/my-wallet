// styles
import { EmptyWrapper } from "../ui/EmptyWrapper.styled.ts";
// components
import EmptyState from "../emptyState/EmptyState.tsx";
// icons
import peel from "@/assets/icons/peel.svg";

const NoResults = () => {
  return (
    <EmptyWrapper>
      <EmptyState heading='No results' icon={peel} />
    </EmptyWrapper>
  );
};

export default NoResults;
