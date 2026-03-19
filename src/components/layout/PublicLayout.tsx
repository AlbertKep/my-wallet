import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";
import Loader from "../loader/Loader.tsx";

const PublicLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  if (user) return <Navigate to='/dashboard' replace />;

  return <Outlet />;
};

export default PublicLayout;
