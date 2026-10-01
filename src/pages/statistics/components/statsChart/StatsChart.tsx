import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
// styles
import { Button } from "@/components/ui/Button.styled";
import {
  ChartWrapper,
  ModeWrapper,
  StyledButton,
  StyledEmptyWrapper,
  Wrapper,
} from "./StatsChart.styled";
// types
import type { ChartStats, Modes } from "@/pages/statistics/Statistics";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type StatsChartProps = {
  convertedStats: ChartStats[];
  mode: string;
  setMode: (value: Modes) => void;
};

const StatsChart: React.FC<StatsChartProps> = ({ convertedStats, mode, setMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const modes = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Last 30 days", value: "monthly" },
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
  };

  const barChartData = {
    labels: convertedStats.map((stat) => stat.date),
    datasets: [
      {
        label: "Expenses",
        data: convertedStats.map((stat) => stat.amount),
        backgroundColor: "rgba(255, 154, 49, 0.5)",
        borderColor: theme.colors.orange,
        borderWidth: 1,
      },
    ],
  };

  const handleClick = (value: Modes) => {
    setMode(value);
  };
  return (
    <Wrapper>
      <ModeWrapper>
        {modes?.map(({ label, value }) => (
          <StyledButton
            key={label}
            $active={mode === value}
            onClick={() => handleClick(value as Modes)}
          >
            {label}
          </StyledButton>
        ))}
      </ModeWrapper>
      {convertedStats.length === 0 ? (
        <StyledEmptyWrapper>
          <p>You haven’t added any transaction today</p>
          <Button onClick={() => navigate("/add")}>Add Transaction</Button>
        </StyledEmptyWrapper>
      ) : (
        <ChartWrapper>
          <Bar options={options} data={barChartData} />
        </ChartWrapper>
      )}
    </Wrapper>
  );
};

export default StatsChart;
