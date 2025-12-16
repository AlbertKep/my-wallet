import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header.tsx";
import Navbar from "../navbar/Navbar.tsx";
import { useAuth } from "../../context/AuthContext.ts";

const ProtectedLayout = () => {
  const { user, loading } = useAuth();
  console.log("ProtectedLayout:", { user, loading });

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to='/signin' replace />;
  return (
    <main>
      <Header />
      <Navbar />
      <Outlet />
    </main>
  );
};

export default ProtectedLayout;
