import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header.tsx";
import Navbar from "../navbar/Navbar.tsx";
import { useAuth } from "../../context/AuthContext.ts";
import { LayoutWrapper } from "../ui/LayoutWrapper.styled.ts";

const ProtectedLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to='/signin' replace />;
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
        <Navbar />
      </LayoutWrapper>
    </>
  );
};

export default ProtectedLayout;
