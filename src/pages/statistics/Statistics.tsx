import styled from "styled-components";
// styles
import { Heading } from "@/components/ui/Heading.styled";
import { MainSection } from "@/components/ui/MainSection.styled";
import { SectionWrapper } from "@/components/ui/SectionWrapper.styled";
import { StatisticsWrapper } from "./Statistics.styled";
// components
import Loader from "@/components/loader/Loader";
import BalanceList from "./components/balanceList/BalanceList";
import CategoryBreakdown from "./components/categoryBreakdown/CategoryBreakdown";
// context
import { useStats } from "@/context/stats/StatsContext";

const Chart = styled.div`
  background-color: red;
  grid-area: chart;
`;

const OtherPanels = styled.div`
  background-color: green;
  grid-area: other;
`;
const Statistics = () => {
  const { stats, loading } = useStats();

  const isEmpty = stats === null;
  if (loading) return <Loader />;

  return (
    <MainSection>
      {isEmpty ? (
        <p>There is no transaction</p>
      ) : (
        <SectionWrapper>
          <Heading>Statistics</Heading>

          <StatisticsWrapper>
            <BalanceList {...stats} />

            <Chart>CHart</Chart>

            <CategoryBreakdown {...stats} />

            <OtherPanels>OtherPanels</OtherPanels>
          </StatisticsWrapper>
        </SectionWrapper>
      )}
    </MainSection>
  );
};

export default Statistics;
