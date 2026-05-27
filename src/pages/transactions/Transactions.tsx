import { useState } from "react";
// styles
import { StyledMainSection } from "./Transactions.styled.ts";
// components
import SelectedFilters from "./components/selectedFilters/SelectedFilters.tsx";
import Filters from "./components/filters/Filters.tsx";
import TransactionsList from "@/components/transactionsList/TransactionsList.tsx";
import NoResults from "@/components/noResults/NoResults.tsx";
import Loader from "@/components/loader/Loader.tsx";
import ErrorState from "@/components/errorState/ErrorState.tsx";
// types
import { transactionTypes } from "../../data/transactionTypesData.ts";
// svg icon
import all from "../../assets/icons/transactionIcons/all.svg";
// hooks
import usePaginatedTransactions from "./hooks/usePaginatedTransactions.tsx";

import { categories } from "@/data/categoriesData.ts";
import { Timestamp } from "firebase/firestore";

export type FiltersFieldUpdate = {
  field: keyof FiltersField;
  value: FiltersField[keyof FiltersField];
};

export type FiltersField = {
  from: Timestamp | null;
  to: Timestamp | null;
  category: string;
  type: string;
  min: string;
  max: string;
};

export type FiltersToDisplay = {
  key: keyof FiltersField;
  label: string;
  formatter?: (value: FiltersField[keyof FiltersField]) => string;
};
const Transactions = () => {
  const filterCategories = [{ id: "all", label: "All", icon: all }, ...categories];
  const filterTransactionTypes = [...transactionTypes, { id: "all", label: "All" }];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FiltersField>({
    from: null,
    to: null,
    category: filterCategories[0].id,
    type: filterCategories[0].id,
    min: "",
    max: "",
  });

  const filtersToDisplay: FiltersToDisplay[] = [
    { key: "from", label: "From" },
    { key: "to", label: "To" },
    { key: "category", label: "Category" },
    { key: "type", label: "Type" },
    { key: "min", label: "Min" },
    { key: "max", label: "Max" },
  ];

  const [activeFilters, setActiveFilters] = useState<FiltersField>(selectedFilters);

  const updateField = ({ field, value }: FiltersFieldUpdate) => {
    // if (field === "title" || field === "price") setErrors((prev) => ({ ...prev, [field]: "" }));
    setSelectedFilters((prev) => ({ ...prev, [field]: value }));
  };

  const isDateKey = (key: keyof FiltersField): key is "from" | "to" => {
    return key === "from" || key === "to";
  };

  const applyFilters = () => {
    setActiveFilters(selectedFilters);
  };
  const { transactions, fetchNextPage, retry, loading, initialLoading, error } = usePaginatedTransactions(activeFilters);
  const isEmpty = transactions.length === 0;
  let content;

  if (initialLoading) return <Loader />;
  else if (error) {
    content = <ErrorState message='Could not load transactions' onRetry={retry} />;
  } else if (!loading && isEmpty) {
    content = <NoResults />;
  } else {
    content = <TransactionsList transactions={transactions} fetchNextPage={fetchNextPage} />;
  }

  return (
    <StyledMainSection>
      <SelectedFilters selectedFilters={selectedFilters} filtersToDisplay={filtersToDisplay} setIsOpen={setIsOpen} isDateKey={isDateKey} />

      <Filters
        selectedFilters={selectedFilters}
        filterCategories={filterCategories}
        filterTransactionTypes={filterTransactionTypes}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        updateField={updateField}
        applyFilters={applyFilters}
      />

      {content}
    </StyledMainSection>
  );
};

export default Transactions;
