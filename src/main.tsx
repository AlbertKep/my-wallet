import ReactDOM from "react-dom/client";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
