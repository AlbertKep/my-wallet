import { useIsMobile } from "@/hooks/useIsMobile.tsx";
import { Pie, PieChart, Tooltip, type PieLabelRenderProps } from "recharts";
import { useTheme } from "styled-components";

// utils
import { getCategoryColor } from "@/utils/getCategoryIcon";
// types
import type { ConvertedCategory } from "../CategoryBreakdown";

type ChartProps = {
  isAnimationActive: boolean;
  convertedCategoryStats: ConvertedCategory[];
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  payload,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = outerRadius + 40;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <image
      x={x - 25}
      y={y - 25}
      height="50"
      width="50"
      href={payload.icon}
      dominantBaseline="central"
    />
  );
};

const Chart: React.FC<ChartProps> = ({ isAnimationActive, convertedCategoryStats }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <PieChart style={{ width: "100%", maxWidth: "300px", aspectRatio: 1 }} responsive>
      <Pie
        data={convertedCategoryStats.map((category) => {
          return {
            ...category,
            fill: getCategoryColor(category.name),
          };
        })}
        label={renderCustomizedLabel}
        innerRadius="70"
        outerRadius="85"
        strokeWidth="0"
        cornerRadius="50%"
        paddingAngle={5}
        dataKey="percentage"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip
        position={isMobile ? { x: -10, y: -0 } : undefined}
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

export default Chart;
