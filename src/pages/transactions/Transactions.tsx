import { useState } from "react";
// styles
import { StyledMainSection, TransactionWrapper } from "./Transactions.styled.ts";
// components
import SelectedFilters from "./components/selectedFilters/SelectedFilters.tsx";
import Filters from "./components/filters/Filters.tsx";
// types
import { transactionTypes } from "../../data/transactionTypesData.ts";
// svg icon
import all from "../../assets/icons/transactionIcons/all.svg";

import { categories } from "../../data/categoriesData.ts";
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

  const updateField = ({ field, value }: FiltersFieldUpdate) => {
    // if (field === "title" || field === "price") setErrors((prev) => ({ ...prev, [field]: "" }));
    setSelectedFilters((prev) => ({ ...prev, [field]: value }));
  };

  const isDateKey = (key: keyof FiltersField): key is "from" | "to" => {
    return key === "from" || key === "to";
  };

  return (
    <StyledMainSection>
      <SelectedFilters selectedFilters={selectedFilters} filtersToDisplay={filtersToDisplay} setIsOpen={setIsOpen} isDateKey={isDateKey} />

      {isOpen && (
        <Filters
          selectedFilters={selectedFilters}
          filterCategories={filterCategories}
          filterTransactionTypes={filterTransactionTypes}
          updateField={updateField}
        />
      )}

      <TransactionWrapper>Transakcje!!!</TransactionWrapper>
    </StyledMainSection>
  );
};

export default Transactions;
