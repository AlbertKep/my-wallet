import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MainSection } from "../../components/ui/MainSection.styled.ts";
import { SectionWrapper } from "../../components/ui/SectionWrapper.styled.ts";
import { Heading } from "../../components/ui/Heading.styled.ts";
import { ContentWrapper, FormWrapper, TransactionFormField, PriceFormField, StyledButton } from "./AddTransaction.styled.ts";
import DropdownCategory from "../../components/dropdownCategory/DropdownCategory.tsx";
import TransactionTypeToggle from "../../components/transactionTypeToggle/TransactionTypeToggle.tsx";
import DatePicker from "../../components/datePicker/DatePicker.tsx";
import { categories } from "../../data/categoriesData.ts";

import { Timestamp } from "firebase/firestore";
import { useAuth } from "../../context/auth/AuthContext.ts";
import { addTransaction } from "../../services/transactions.ts";
import { transactionValidate, type TransactionErrors } from "../../utils/validation/transactionValidate.ts";

export type TransactionFieldUpdate = {
  field: keyof TransactionForm;
  value: TransactionForm[keyof TransactionForm];
};

export type TransactionForm = {
  category: string;
  date: Timestamp;
  price: string;
  title: string;
  type: string;
  userID: string;
};

const AddTransaction = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState<TransactionForm>({
    category: categories[0].id,
    date: Timestamp.now(),
    price: 0,
    title: "",
    type: "expense",
    userID: "",
  });
  const [errors, setErrors] = useState<TransactionErrors>();

  const updateField = ({ field, value }: TransactionFieldUpdate) => {
    setTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { errors, hasErrors } = transactionValidate(transaction.title, transaction.price);
    if (hasErrors) {
      setErrors(errors);
      return;
    }

    navigate("/dashboard");
  };

  useEffect(() => {
    if (user?.uid) {
      setTransaction((prev) => ({ ...prev, userID: user.uid }));
    }
  }, [user?.uid]);

  if (loading) return <p>Loading...</p>;
  return (
    <MainSection>
      <SectionWrapper>
        <Heading>Add Transaction</Heading>
        <ContentWrapper>
          <FormWrapper onSubmit={handleSubmit}>
            <TransactionFormField
              id='transaction'
              name='transactionTitle'
              label='Transaction Title'
              type='text'
              value={transaction.title}
              onValueChange={(value) => updateField({ field: "title", value })}
              error={errors?.title}
            />
            <PriceFormField
              id='price'
              name='price'
              label='Price'
              type='number'
              value={transaction.price}
              onValueChange={(value) => updateField({ field: "price", value })}
              error={errors?.price}
            />
            <DropdownCategory categories={categories} selectedCategory={transaction.category} updateField={updateField} />
            <TransactionTypeToggle selectedType={transaction.type} updateField={updateField} />
            <DatePicker selectedDate={transaction.date} updateField={updateField} />

            <StyledButton>Add Transaction</StyledButton>
          </FormWrapper>
        </ContentWrapper>
      </SectionWrapper>
    </MainSection>
  );
};

export default AddTransaction;
