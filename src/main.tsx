import ReactDOM from "react-dom/client";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import { TransactionsProvider } from "./context/transactions/TransactionsProvider.tsx";
import { StatsProvider } from "./context/stats/StatsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <StatsProvider>
        <TransactionsProvider>
          <RouterProvider router={router} />
        </TransactionsProvider>
      </StatsProvider>
    </AuthProvider>
  </React.StrictMode>,
);
