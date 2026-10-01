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
import StatsChart from "./components/statsChart/StatsChart";
// context
import { useStats } from "@/context/stats/StatsContext";
import { useTransactions } from "@/context/transactions/TransactionsContext";
import { useEffect, useState } from "react";
// types
import { type TransactionWithId } from "@/services/transactions";
// utils
import { getStartDate, timestampToHour, timestampToInputDate } from "@/utils/dateConverters";
// firebase
import { Timestamp } from "firebase/firestore";

const OtherPanels = styled.div`
  background-color: green;
  grid-area: other;
`;
export type ChartStats = {
  date: string;
  amount: number;
};

type RangeTransactions = Record<string, number>;

export type Modes = "daily" | "weekly" | "monthly";
const Statistics = () => {
  const todayDate = Timestamp.fromDate(new Date());
  const { stats, loading } = useStats();
  const { transactions } = useTransactions();
  const [convertedStats, setConvertedStats] = useState<ChartStats[]>([]);
  const [mode, setMode] = useState<Modes>("daily");

  const dailyFilter = (transactions: TransactionWithId[]) => {
    return transactions.filter(({ type, date }) => {
      return type === "expense" && timestampToInputDate(date) === timestampToInputDate(todayDate);
    });
  };

  const rangeFilter = (transactions: TransactionWithId[], range: number) => {
    const startDate = getStartDate(range);
    return transactions.filter(({ type, date }) => {
      return type === "expense" && date.seconds >= startDate && date.seconds <= todayDate.seconds;
    });
  };
  const sortTransactions = (filtered: TransactionWithId[]) => {
    return [...filtered].sort((a, b) => a.date.seconds - b.date.seconds);
  };

  const calculateStats = (sortedTransactions: TransactionWithId[]) => {
    const rangeTransactions: RangeTransactions = {};
    if (mode !== "daily") {
      for (let index = 0; index < sortedTransactions.length; index++) {
        const transaction = sortedTransactions[index];
        const day = timestampToInputDate(transaction.date);
        if (rangeTransactions[day]) {
          rangeTransactions[day] += transaction.price;
        } else {
          rangeTransactions[day] = transaction.price;
        }
      }
    }

    const readyRangeTransactions = [];
    for (const [key, value] of Object.entries(rangeTransactions)) {
      readyRangeTransactions.push({
        date: key,
        amount: value,
      });
    }

    const mappedData = [...sortedTransactions].map(({ price, date }) => {
      return {
        date: timestampToHour(date.seconds),
        amount: price,
      };
    });
    return mode === "daily" ? mappedData : readyRangeTransactions;
  };
  const getDataStats = (transactions: TransactionWithId[]) => {
    let filtered: TransactionWithId[];
    switch (mode) {
      case "weekly":
        filtered = rangeFilter(transactions, 7);
        break;
      case "monthly":
        filtered = rangeFilter(transactions, 30);
        break;
      default:
        filtered = dailyFilter(transactions);
    }

    setConvertedStats(calculateStats(sortTransactions(filtered)));
  };
  useEffect(() => {
    getDataStats(transactions);
  }, [transactions, mode]);

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

            <StatsChart convertedStats={convertedStats} mode={mode} setMode={setMode} />

            <CategoryBreakdown {...stats} />

            <OtherPanels>OtherPanels</OtherPanels>
          </StatisticsWrapper>
        </SectionWrapper>
      )}
    </MainSection>
  );
};

export default Statistics;
