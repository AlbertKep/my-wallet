import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App.tsx";
import ProtectedLayout from "../components/layout/ProtectedLayout.tsx";
import PublicLayout from "../components/layout/PublicLayout.tsx";
import Register from "../pages/register/Register.tsx";
import SignIn from "../pages/signIn/SignIn.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import Statistics from "../pages/statistics/Statistics.tsx";
import Transactions from "../pages/transactions/Transactions.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<Register />} /> {/* "/" -> Register */}
        <Route path='register' element={<Register />} />
        <Route path='signin' element={<SignIn />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='statistics' element={<Statistics />} />
        <Route path='transactions' element={<Transactions />} />
      </Route>
    </Route>
  )
);
