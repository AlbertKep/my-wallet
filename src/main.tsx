import ReactDOM from "react-dom/client";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import { TransactionsProvider } from "./context/transactions/TransactionsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <TransactionsProvider>
        <RouterProvider router={router} />
      </TransactionsProvider>
    </AuthProvider>
  </React.StrictMode>,
);
