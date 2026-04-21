import { TypeWrapper, TypeOption } from "./TransactionTypeToggle.styled.ts";
import { type TransactionType } from "../../data/transactionTypesData.ts";

type TransactionTypeToggleProps<T> = {
  selectedType: string;
  types: TransactionType[];
  updateField: (payload: T) => void;
};
const TransactionTypeToggle = <T,>({ selectedType, types, updateField }: TransactionTypeToggleProps<T>) => {
  const selectType = (type: string) => updateField({ field: "type", value: type } as T);

  return (
    <TypeWrapper>
      {types?.map((type) => (
        <TypeOption key={type.id} type='button' $active={type.id === selectedType} onClick={() => selectType(type.id)}>
          {type.label}
        </TypeOption>
      ))}
    </TypeWrapper>
  );
};

export default TransactionTypeToggle;
