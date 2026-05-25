import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
// firebase
import { Timestamp } from "firebase/firestore";
// styles
import { MainSection } from "@/components/ui/MainSection.styled.ts";
import { SectionWrapper } from "@/components/ui/SectionWrapper.styled.ts";
import { Heading } from "@/components/ui/Heading.styled.ts";
import { ContentWrapper, FormWrapper, TransactionFormField, PriceFormField, StyledButton } from "./AddTransaction.styled.ts";
// components
import DropdownCategory from "@/components/dropdownCategory/DropdownCategory.tsx";
import TransactionTypeToggle from "@/components/transactionTypeToggle/TransactionTypeToggle.tsx";
import DatePicker from "@/components/datePicker/DatePicker.tsx";
import Loader from "@/components/loader/Loader.tsx";
// utils
import { transactionValidate, type TransactionErrors } from "@/utils/validation/transactionValidate.ts";
import { getCategoryIcon } from "@/utils/getCategoryIcon.ts";
import { showToast } from "@/utils/showToast.tsx";
// services
import { addTransaction } from "@/services/transactions.ts";
// context
import { useAuth } from "@/context/auth/AuthContext.ts";

import { categories } from "@/data/categoriesData.ts";
import { transactionTypes } from "@/data/transactionTypesData.ts";

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
    price: "",
    title: "",
    type: "expense",
    userID: "",
  });
  const [errors, setErrors] = useState<TransactionErrors>();

  const updateField = ({ field, value }: TransactionFieldUpdate) => {
    if (field === "title" || field === "price") setErrors((prev) => ({ ...prev, [field]: "" }));
    setTransaction((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { errors, hasErrors } = transactionValidate(transaction.title, transaction.price);
    if (hasErrors) {
      setErrors(errors);
      return;
    }

    await addTransaction({ ...transaction, price: Number(transaction.price) });

    const icon = getCategoryIcon(transaction.category);
    showToast(`Added ${transaction.title}`, icon);
    navigate("/dashboard");
  };

  useEffect(() => {
    if (user?.uid) {
      setTransaction((prev) => ({ ...prev, userID: user.uid }));
    }
  }, [user?.uid]);

  if (loading) return <Loader />;
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
              type='text'
              value={transaction.price}
              onValueChange={(value) => updateField({ field: "price", value })}
              error={errors?.price}
            />
            <DropdownCategory categories={categories} selectedCategory={transaction.category} updateField={updateField} />
            <TransactionTypeToggle types={transactionTypes} selectedType={transaction.type} updateField={updateField} />
            <DatePicker id='date' label='Date' selectedDate={transaction.date} updateField={updateField} />

            <StyledButton>Add Transaction</StyledButton>
          </FormWrapper>
        </ContentWrapper>
      </SectionWrapper>
    </MainSection>
  );
};

export default AddTransaction;
