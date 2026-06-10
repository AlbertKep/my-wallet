import { createContext, useContext } from "react";

// types
import { type StatsResult } from "@/services/stats.ts";

interface StatsContextType {
  stats: StatsResult | null;
  loading: boolean;
}
export const StatsContext = createContext<StatsContextType | undefined>(undefined);

export const useStats = () => {
  const context = useContext(StatsContext);

  if (context === undefined) {
    throw new Error("Context must be used with a StatsContext");
  } else {
    return context;
  }
};
