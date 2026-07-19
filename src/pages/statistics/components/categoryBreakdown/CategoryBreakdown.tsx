// styles
import { Controller, StyledHeading, Wrapper } from "./CategoryBreakdown.styled";
// components
import Chart from "./chart/Chart";
import Legend from "./legend/Legend";
// utils
import { getCategoryIcon } from "@/utils/getCategoryIcon";
// types
import type { Stats } from "@/services/stats";

type CategoryBreakdownProps = {
  totalExpense: number;
  categoryStats: Stats[];
};

export type ConvertedCategory = {
  categoryID: string;
  name: string;
  total: number;
  percentage: number;
  icon: string;
};

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ totalExpense, categoryStats }) => {
  const calculatePercentage = (total: number, totalExpense: number) => {
    const result = (total * 100) / totalExpense;
    return Math.round(result);
  };

  const convertedCategoryStats: ConvertedCategory[] = categoryStats.map(
    ({ categoryID, name, total }) => {
      return {
        categoryID,
        name,
        total,
        percentage: calculatePercentage(total, totalExpense),
        icon: getCategoryIcon(name),
      };
    },
  );

  return (
    <Wrapper>
      <StyledHeading>Category Breakdown</StyledHeading>
      <Controller>
        <Chart isAnimationActive convertedCategoryStats={convertedCategoryStats} />
        <Legend convertedCategoryStats={convertedCategoryStats} />
      </Controller>
    </Wrapper>
  );
};

export default CategoryBreakdown;
