"use client";
import { useAuth } from "@/context/authcontext";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NoAccess = dynamic(() => import('@/components/noaccess'))
const CreateAccountAdmin = dynamic(() => import('@/components/createaccountadmin'))

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
    <div className="flex flex-col mt-5 ml-5">
      <h2 className="font-semibold text-2xl">CREATE ACCOUNT</h2>
      <CreateAccountAdmin/>
    </div>
  );
}
