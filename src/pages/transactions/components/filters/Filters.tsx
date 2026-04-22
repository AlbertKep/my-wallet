// styles
import { Wrapper, FilterGroup, StyledLabel } from "./Filters.styled.ts";
// components
import DatePicker from "@/components/datePicker/DatePicker.tsx";
import DropdownCategory from "@/components/dropdownCategory/DropdownCategory.tsx";
import TransactionTypeToggle from "@/components/transactionTypeToggle/TransactionTypeToggle.tsx";
import FormField from "@/components/formField/FormField.tsx";
// types
import type { FiltersField, FiltersFieldUpdate } from "../../Transactions.tsx";
import type { Category } from "@/data/categoriesData.ts";
import type { TransactionType } from "@/data/transactionTypesData.ts";

type FiltersProps = {
  selectedFilters: FiltersField;
  filterCategories: Category[];
  filterTransactionTypes: TransactionType[];
  updateField: (update: FiltersFieldUpdate) => void;
};
const Filters: React.FC<FiltersProps> = ({ selectedFilters, filterCategories, filterTransactionTypes, updateField }) => {
  return (
    <Wrapper>
      <FilterGroup $variant='dates'>
        <DatePicker id='from' label='From' selectedDate={selectedFilters.from} updateField={updateField} />
        <DatePicker id='to' label='To' selectedDate={selectedFilters.to} updateField={updateField} />
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
          // error={errors?.price}
        />

        <FormField
          id='max'
          name='max'
          label='Max'
          type='text'
          value={selectedFilters.max}
          onValueChange={(value) => updateField({ field: "max", value })}
          // error={errors?.price}
        />
      </FilterGroup>
    </Wrapper>
  );
};

export default Filters;
