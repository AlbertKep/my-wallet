// styles
import { Wrapper, List, StyledButton } from "./SelectedFilters.styled.ts";
// types
import type { FiltersField, FiltersToDisplay } from "../../Transactions.tsx";
// uttils
import { timestampToInputDate } from "@/utils/dateConverters.ts";
// svg icon
import dropdownArrow from "@/assets/icons/dropdown_arrow.svg";

type SelectedFiltersBaseProps = {
  selectedFilters: FiltersField;
  filtersToDisplay: FiltersToDisplay[];
  isDateKey: (key: keyof FiltersField) => key is "from" | "to";
};
type SelectedFiltersProps = SelectedFiltersBaseProps & { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> };

const renderSelectedFilters = ({ selectedFilters, filtersToDisplay, isDateKey }: SelectedFiltersBaseProps) => {
  return filtersToDisplay.map(({ key }) => {
    if (isDateKey(key)) {
      const dateValue = selectedFilters[key];
      if (dateValue === null) return null;
      const displayValue = timestampToInputDate(dateValue);
      return (
        <li key={key}>
          {key}: {displayValue}
        </li>
      );
    }
    const value = selectedFilters[key];
    if (value === "all" || value === "" || value === null) return null;

    if (key === "min" || key === "max")
      return (
        <li key={key}>
          {key}: {value} zł
        </li>
      );
    return (
      <li key={key}>
        {key}: {value}
      </li>
    );
  });
};

const SelectedFilters: React.FC<SelectedFiltersProps> = ({ selectedFilters, filtersToDisplay, setIsOpen, isDateKey }) => {
  return (
    <Wrapper>
      <List>{renderSelectedFilters({ filtersToDisplay, selectedFilters, isDateKey })}</List>
      <StyledButton onClick={() => setIsOpen((prev) => !prev)}>
        <span>Filters</span>
        <img src={dropdownArrow} alt='arrow' />
      </StyledButton>
    </Wrapper>
  );
};

export default SelectedFilters;
