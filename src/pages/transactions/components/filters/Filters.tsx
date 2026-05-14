import { useState } from "react";
// styles
import { Wrapper, ScrollWrapper, FilterGroup, StyledLabel, ButtonWrapper, StyledButton } from "./Filters.styled.ts";
// components
import DatePicker from "@/components/datePicker/DatePicker.tsx";
import DropdownCategory from "@/components/dropdownCategory/DropdownCategory.tsx";
import TransactionTypeToggle from "@/components/transactionTypeToggle/TransactionTypeToggle.tsx";
import FormField from "@/components/formField/FormField.tsx";
// validation
import { filtersValidate } from "@/utils/validation/filtersValidate.ts";
// types
import type { FiltersField, FiltersFieldUpdate } from "../../Transactions.tsx";
import type { Category } from "@/data/categoriesData.ts";
import type { TransactionType } from "@/data/transactionTypesData.ts";
import type { FiltersErrors } from "@/utils/validation/filtersValidate.ts";

type FiltersProps = {
  selectedFilters: FiltersField;
  filterCategories: Category[];
  filterTransactionTypes: TransactionType[];
  isOpen: boolean;
  updateField: (update: FiltersFieldUpdate) => void;
};
const Filters: React.FC<FiltersProps> = ({ selectedFilters, filterCategories, filterTransactionTypes, isOpen, updateField }) => {
  const [errors, setErrors] = useState<FiltersErrors>();
  const handleFiltersValidation = () => {
    setErrors({});
    const { errors, hasErrors } = filtersValidate(selectedFilters);
    if (hasErrors) {
      setErrors(errors);
      return;
    }
  };

  return (
    <Wrapper $isOpen={isOpen}>
      <ScrollWrapper>
        <FilterGroup $variant='dates'>
          <DatePicker id='from' label='From' selectedDate={selectedFilters.from} updateField={updateField} />
          <DatePicker id='to' label='To' selectedDate={selectedFilters.to} updateField={updateField} error={errors?.date} />
        </FilterGroup>

        <FilterGroup $variant='category'>
          <div>
            <StyledLabel as='p'>Category</StyledLabel>
            <DropdownCategory categories={filterCategories} selectedCategory={selectedFilters.category} updateField={updateField} />
          </div>
          <div>
            <StyledLabel as='p'>Type</StyledLabel>
            <TransactionTypeToggle types={filterTransactionTypes} selectedType={selectedFilters.type} updateField={updateField} />
          </div>
        </FilterGroup>

        <FilterGroup $variant='range'>
          <FormField
            id='min'
            name='min'
            label='Min'
            type='text'
            value={selectedFilters.min}
            onValueChange={(value) => updateField({ field: "min", value })}
          />

          <FormField
            id='max'
            name='max'
            label='Max'
            type='text'
            value={selectedFilters.max}
            onValueChange={(value) => updateField({ field: "max", value })}
            error={errors?.range}
          />
        </FilterGroup>
      </ScrollWrapper>
      <ButtonWrapper>
        <StyledButton>Reset</StyledButton>
        <StyledButton onClick={handleFiltersValidation}>Apply</StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Filters;
