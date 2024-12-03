"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import  Cookies from 'js-cookie'
import { AuthContextType } from "@/types/types";
import { useRouter } from "next/navigation";
import fetchAPI from "@/api/fetch";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [userRoles, setUserRoles] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("APP-TOKEN");
    const rememberToken = Cookies.get("APP-REMEMBER-TOKEN");

    if (token || rememberToken) {
      fetchUserProfile();
    } else {
      setLoading(false);
      setIsAuthenticated(false);
    }
  }, []);

  const fetchUserProfile = async () => {
    const token = Cookies.get("APP-TOKEN");
    const rememberToken = Cookies.get("APP-REMEMBER-TOKEN");

    if (!token || !rememberToken) {
      setIsAuthenticated(false);
      setLoading(false);
      setUser(null);
      setUserRoles(null);
      return;
    }

    try {
      const response = await fetchAPI("/auth/profile");
      if (
        response.data.statusCode === 200 &&
        response.data.user.rememberToken === rememberToken
      ) {
        setUser(response.data.user);
        setUserRoles(response.data.user.roles.map((role: any) => role.name));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error: any) {
      console.error("Failed to fetch user profile", error);
      setIsAuthenticated(false);
      setUser(null);
      setUserRoles(null);
    } finally {
      setLoading(false);
    }
  };

  const login = (token: string, rememberToken: string) => {
    setIsAuthenticated(true);
    Cookies.set("APP-TOKEN", token);
    Cookies.set("APP-REMEMBER-TOKEN", rememberToken);
    fetchUserProfile();
    router.push("/dashboard");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setIsLogout(true);
    setUserRoles(null);
    Cookies.remove("APP-TOKEN");
    Cookies.remove("APP-REMEMBER-TOKEN");

    router.push("/login");

    setTimeout(() => {
      setIsLogout(false);
    }, 500);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        loading,
        user,
        userRoles,
        isLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);