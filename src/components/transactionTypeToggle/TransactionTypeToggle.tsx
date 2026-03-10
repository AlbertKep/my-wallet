import { TypeWrapper, TypeOption } from "./TransactionTypeToggle.styled.ts";
import { type TransactionFieldUpdate } from "../../pages/addTransaction/AddTransaction.tsx";

type TransactionTypeToggleProps = {
  selectedType: string;
  updateField: ({ field, value }: TransactionFieldUpdate) => void;
};
const TransactionTypeToggle: React.FC<TransactionTypeToggleProps> = ({ selectedType, updateField }) => {
  const isExpense = selectedType === "expense";

  const selectType = (type: string) => updateField({ field: "type", value: type });

  return (
    <TypeWrapper>
      <TypeOption type='button' $active={isExpense} onClick={() => selectType("expense")}>
        Expense
      </TypeOption>
      <TypeOption type='button' $active={!isExpense} onClick={() => selectType("income")}>
        Income
      </TypeOption>
    </TypeWrapper>
  );
};

export default TransactionTypeToggle;
