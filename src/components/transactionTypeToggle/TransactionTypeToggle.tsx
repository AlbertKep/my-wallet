import { TypeWrapper, TypeOption } from "./TransactionTypeToggle.styled.ts";
import { type TransactionFieldUpdate } from "../../pages/addTransaction/AddTransaction.tsx";

type TransactionTypeToggleProps = {
  selectedType: string;
  updateField: ({ field, value }: TransactionFieldUpdate) => void;
};
const TransactionTypeToggle: React.FC<TransactionTypeToggleProps> = ({ selectedType, updateField }) => {
  const isExpense = selectedType === "expense";

  const handleChooseType = (type: string) => updateField({ field: "type", value: type });

  return (
    <TypeWrapper>
      <TypeOption $active={isExpense} onClick={() => handleChooseType("expense")}>
        Expense
      </TypeOption>
      <TypeOption $active={!isExpense} onClick={() => handleChooseType("income")}>
        Income
      </TypeOption>
    </TypeWrapper>
  );
};

export default TransactionTypeToggle;
