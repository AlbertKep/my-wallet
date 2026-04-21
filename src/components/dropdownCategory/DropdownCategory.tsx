import { useState } from "react";
import { DropdownCategoryWrapper, SelectedCategory, DropdownArrow, CategoryList, CategoryItem } from "./DropdownCategory.styled.ts";
import dropdownArrow from "../../assets/icons/dropdown_arrow.svg";
import { type Category } from "../../data/categoriesData.ts";

type DropdownCategoryProps<T> = {
  selectedCategory: string;
  categories: Category[];
  updateField: (payload: T) => void;
};

const DropdownCategory = <T,>({ selectedCategory, categories, updateField }: DropdownCategoryProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategoryOject = categories.find((cat) => cat.id === selectedCategory);

  const handleChooseCategory = (category: string) => {
    updateField({ field: "category", value: category } as T);
    setIsOpen((prev) => !prev);
  };

  return (
    <DropdownCategoryWrapper>
      <SelectedCategory onClick={() => setIsOpen((prev) => !prev)}>
        <p>
          <img src={selectedCategoryOject?.icon} alt={selectedCategoryOject?.label} />
          <span>{selectedCategoryOject?.label}</span>
        </p>

        <DropdownArrow src={dropdownArrow} alt='dropdown arrow' $isOpen={isOpen} />
      </SelectedCategory>

      <CategoryList $isOpen={isOpen}>
        {categories?.map((category) => (
          <CategoryItem key={category.id} onClick={() => handleChooseCategory(category.id)}>
            <img src={category.icon} alt={category.label} />
            <span>{category.label}</span>
          </CategoryItem>
        ))}
      </CategoryList>
    </DropdownCategoryWrapper>
  );
};

export default DropdownCategory;
