'use client'
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { isAuthenticated, loading, isLogout }: any = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!isAuthenticated && !loading) {
        return router.push("/login");
      }
    }, [isAuthenticated, loading, router]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!isAuthenticated && !isLogout) {
      return <div>Youre not allowed to access this page.</div>;
    }
    return(
        <div className="flex justify-center mt-20">
            <p className="text-3xl font-semibold">Welcome to Technician Panel of Incident Manangement System</p>
        </div>
    );
}