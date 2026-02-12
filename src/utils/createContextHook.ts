import { createContext, useContext } from "react";

export function createSafeContext<T>(errorMessage: string) {
  const ctx = createContext<T | undefined>(undefined);

  const useCtx = () => {
    const context = useContext(ctx);

    if (context === undefined) {
      throw new Error(errorMessage);
    } else {
      return context;
    }
  };

  return [ctx, useCtx] as const;
}
