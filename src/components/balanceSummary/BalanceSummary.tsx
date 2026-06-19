import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { Wrapper, TextWrapper, Heading, Balance, ChartWrapper } from "./BalanceSummary.styled.ts";
import BalanceChart from "../balanceChart/BalanceChart.tsx";

import { type StatsResult } from "@/services/stats.ts";

export type BalanceChartDataProps = {
  name: string;
  value: number | undefined;
  fill: string;
};
const BalanceSummary: React.FC<StatsResult> = ({ totalIncome, totalExpense, balance }) => {
  const theme = useTheme();
  const [balanceChartData, setBalanceChartData] = useState<BalanceChartDataProps[]>([]);

  useEffect(() => {
    const data = [
      { name: "income", value: totalIncome, fill: theme.colors.green },
      { name: "expense", value: totalExpense, fill: theme.colors.red },
    ];

    setBalanceChartData(data);
  }, [totalExpense, totalIncome]);

  return (
    <Wrapper>
      <TextWrapper>
        <Heading>Main Balance</Heading>
        <Balance>{balance} zł</Balance>
      </TextWrapper>

      <ChartWrapper>{<BalanceChart isAnimationActive balanceChartData={balanceChartData} />}</ChartWrapper>
    </Wrapper>
  );
};

export default BalanceSummary;
