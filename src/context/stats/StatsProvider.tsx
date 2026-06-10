import { useState, useEffect, type ReactNode } from "react";
import { useAuth } from "../auth/AuthContext.ts";
// services
import { subscribeToUserStats } from "@/services/stats.ts";
// context
import { StatsContext } from "./StatsContext.ts";

// types
import { type StatsResult } from "@/services/stats.ts";

type StatsContextProps = {
  children: ReactNode;
};

export const StatsProvider: React.FC<StatsContextProps> = ({ children }) => {
  const [stats, setStats] = useState<StatsResult | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setStats(null);
      return;
    }

    setLoading(true);

    const unsubscribe = subscribeToUserStats(user.uid, (snapshot) => {
      if (snapshot.exists()) {
        const items: StatsResult = snapshot.data() as StatsResult;
        setStats(items);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  return <StatsContext.Provider value={{ stats, loading }}>{children}</StatsContext.Provider>;
};
