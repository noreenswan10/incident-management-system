"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { accountdata } from "@/data/accountdata";
import { AuthContextType } from "@/types/types";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [accessToken, setAccessToken] = useState<string | null>(null);
  // const [rememberToken, setRememberToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRoles, setUserRoles] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("APP_TOKEN");
    const rememberToken = Cookies.get("SESSION_TOKEN");

    if (token || rememberToken) {
      fetchUser();
    } else {
      setLoading(false);
      setIsAuthenticated(false);
    }
  }, [])
  
  const fetchUser = async () => {
    const token = Cookies.get("APP_TOKEN");
    const rememberToken = Cookies.get("SESSION_TOKEN");
  
    console.log("Access Token from cookies:", token);
    console.log("Remember Token from cookies:", rememberToken);
  
    if (!token || !rememberToken) {
      console.log("Token or RememberToken is missing");
      setIsAuthenticated(false);
      setLoading(false);
      setUser(null);
      setUserRoles(null);
      return;
    }
  
    try {
      const response = await fetch(
        "http://136.239.196.178:5004/api/v1/auth/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const data = await response.json();
      console.log("User data from API:", data);
  
      if (data.statusCode === 200 && data.loginDetails.rememberToken === rememberToken) {
        setUser(data.loginDetails);
        setUserRoles(data.loginDetails.roles.map((role: any) => role.name));
        setIsAuthenticated(true);
      } else {
        console.log("Invalid token or rememberToken mismatch");
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user profile", error);
      setIsAuthenticated(false);
      setUser(null);
      setUserRoles(null);
    } finally {
      setLoading(false);
    }
  };
  
  
  
  
  const login = (accessToken: string, rememberToken: string) => {
    console.log("Access Token: ", accessToken);
    console.log("Remember Token: ", rememberToken);
    Cookies.set("APP_TOKEN", accessToken, { expires: 7, secure: true });
    Cookies.set("SESSION_TOKEN", rememberToken, { expires: 7, secure: true });
    
    console.log('Stored cookies:', {
      APP_TOKEN: Cookies.get("APP_TOKEN"),
      SESSION_TOKEN: Cookies.get("SESSION_TOKEN"),
    });
    
    fetchUser();
    router.push("/user");
  };
  

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setIsLogout(true);

    Cookies.remove("APP_TOKEN");
    Cookies.remove("SESSION_TOKEN");
    router.push('/login');

    setTimeout(()=> {
      setIsLogout(false);
    }, 500)
  };

  const hasUserRole = userRoles?.includes("user") || userRoles === null;
  const hasTechnicianRole = userRoles?.includes("technician") || userRoles === null;
  const hasAdminRole = userRoles?.includes("admin") || userRoles === null;

  if (userRoles === hasUserRole) {
    router.push('/user')
  } else if(userRoles === hasAdminRole){
    router.push('/admin')
  } else if(userRoles === hasTechnicianRole){
    router.push('/technician')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLogout,
        // accessToken,
        // rememberToken,
        login,
        logout,
        user,
        loading,
        userRoles,
        hasUserRole,
        hasTechnicianRole,
        hasAdminRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
