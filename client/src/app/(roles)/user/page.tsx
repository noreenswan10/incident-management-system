'use client'
import { useAuth } from "@/context/authcontext";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NoAccess = dynamic(() => import('@/components/noaccess'))

export default function Page() {
  const { isAuthenticated, loading, isLogout }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("User is authenticated:", isAuthenticated);
    console.log("Loading state:", loading);
    if (!isAuthenticated && !loading) {
      return router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return 'Loading...';
  }

  if (!isAuthenticated && !isLogout) {
    return <NoAccess/>;
  }


  return (
    <div className="flex justify-center mt-20">
      <div>
        <p className="text-3xl font-semibold">Welcome to User Panel of Incident Management System</p>
      </div>
    </div>
  );
}