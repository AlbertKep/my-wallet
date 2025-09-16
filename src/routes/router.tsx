import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import Statistics from "../pages/statistics/Statistics.tsx";
import Transactions from "../pages/transactions/Transactions.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/transactions" element={<Transactions />} />
    </Route>
  )
);
