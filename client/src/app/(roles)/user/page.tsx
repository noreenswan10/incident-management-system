'use client'
import { useAuth } from "@/context/authcontext";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NoAccess = dynamic(() => import('@/components/noaccess'))

export default function Page() {
  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return (
        <>
        <NoAccess/>
        </>
    );
  }

  return (
    <div className="flex justify-center mt-20">
      <div>
        <p className="text-3xl font-semibold">Welcome to User Panel of Incident Management System</p>
      </div>
    </div>
  );
}