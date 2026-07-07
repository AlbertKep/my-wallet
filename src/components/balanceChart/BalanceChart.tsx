import { Pie, PieChart, Tooltip } from "recharts";
import { useTheme } from "styled-components";
// hooks
import { useIsMobile } from "@/hooks/useIsMobile";
// types
import { type BalanceChartDataProps } from "../balanceSummary/BalanceSummary";

type BalanceChartProps = {
  isAnimationActive: boolean;
  balanceChartData: BalanceChartDataProps[];
};
const BalanceChart: React.FC<BalanceChartProps> = ({ isAnimationActive, balanceChartData }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <PieChart
      style={{ width: "100%", maxWidth: "200px", maxHeight: "60vh", aspectRatio: 1 }}
      responsive
    >
      <Pie
        data={balanceChartData}
        innerRadius="70%"
        outerRadius="100%"
        strokeWidth="0"
        cornerRadius="50%"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip
        position={isMobile ? { x: -35, y: -65 } : undefined}
        wrapperStyle={{
          backgroundColor: theme.colors.lightBeige,
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontSize: "0.9rem",
          border: "none",
        }}
        contentStyle={{
          border: "none",
          background: "transparent",
        }}
        labelStyle={{
          fontWeight: "bold",
          marginBottom: "4px",
        }}
        itemStyle={{
          padding: "2px 0",
        }}
      />
    </PieChart>
  );
};

export default BalanceChart;
