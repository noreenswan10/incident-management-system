import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    // const { isAuthenticated, loading, isLogout }: any = useAuth();
    // const router = useRouter();
  
    // useEffect(() => {
    //   if (!isAuthenticated && !loading) {
    //     return router.push("/login");
    //   }
    // }, [isAuthenticated, loading, router]);
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (!isAuthenticated && !isLogout) {
    //   return <div>Youre not allowed to access this page.</div>;
    // }
    return(
        <div className="flex flex-col mt-5">
            <h2 className="font-semibold text-2xl">
                CREATE ACCOUNT
            </h2>
        </div>
    )
}