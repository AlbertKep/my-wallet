import { useState, useEffect, type ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { logout } from "../services/auth.ts";
import { auth } from "../services/firebase.ts";
import { AuthContext } from "./AuthContext.ts";
type AuthContextProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const logoutUser = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubcribe();
  }, []);

  return <AuthContext.Provider value={{ user, loading, logoutUser }}>{children}</AuthContext.Provider>;
};
