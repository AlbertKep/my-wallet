import type { ReactNode, FormEvent } from "react";
import {
  ContentWrapper,
  FormWrapper,
  PriceFormField,
  TransactionFormField,
} from "./TransactionFormFields.styled";
import DropdownCategory from "../dropdownCategory/DropdownCategory";
import TransactionTypeToggle from "../transactionTypeToggle/TransactionTypeToggle";
import DatePicker from "../datePicker/DatePicker";
// context
import { useAuth } from "@/context/auth/AuthContext.ts";
// types
import type { TransactionForm, TransactionFieldUpdate } from "@/types/transaction";
import { type TransactionErrors } from "@/utils/validation/transactionValidate";
// data
import { categories } from "@/data/categoriesData";
import { transactionTypes } from "../../data/transactionTypesData";

type TransactionFormFieldProps = {
  children: ReactNode;
  transaction: TransactionForm;
  errors?: TransactionErrors;
  updateField: ({ value, field }: TransactionFieldUpdate) => void;
  onSubmit: (event: FormEvent) => Promise<void>;
};
const TransactionFormFields: React.FC<TransactionFormFieldProps> = ({
  children,
  transaction,
  errors,
  updateField,
  onSubmit,
}) => {
  return (
    <ContentWrapper>
      <FormWrapper onSubmit={onSubmit}>
        <TransactionFormField
          id="transaction"
          name="transactionTitle"
          label="Transaction Title"
          type="text"
          value={transaction.title}
          onValueChange={(value) => updateField({ field: "title", value })}
          error={errors?.title}
        />
        <PriceFormField
          id="price"
          name="price"
          label="Price"
          type="text"
          value={transaction.price}
          onValueChange={(value) => updateField({ field: "price", value })}
          error={errors?.price}
        />
        <DropdownCategory
          categories={categories}
          selectedCategory={transaction.category}
          updateField={updateField}
        />
        <TransactionTypeToggle
          types={transactionTypes}
          selectedType={transaction.type}
          updateField={updateField}
        />
        <DatePicker
          id="date"
          label="Date"
          selectedDate={transaction.date}
          updateField={updateField}
        />

        {children}
      </FormWrapper>
    </ContentWrapper>
  );
};

export default TransactionFormFields;
