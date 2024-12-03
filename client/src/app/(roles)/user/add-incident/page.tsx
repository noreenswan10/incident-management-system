"use client";
import { useAuth } from "@/context/authcontext";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const NoAccess = dynamic(() => import("@/components/noaccess"));

export default function AddIncident() {
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { isAuthenticated, loading, isLogout }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
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
    <div className="flex flex-col mt-5 ml-5">
      <div className="flex w-1/4 items-start justify-between">
        <h2 className="font-semibold text-2xl">Add Incident Report</h2>
        <FaXmark
          className="text-[#333] text-xl cursor-pointer"
          onClick={() => router.push("/user/incident-report")}
        />
      </div>
      <div className="w-1/4 mt-5">
        <form>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as "Technician" | "User")
              }
              className="border border-[#333] p-2 rounded-xl"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Network Outage">Network Outage</option>
              <option value="Software Installation Request">
                Software Installation Request
              </option>
              <option value="Printer Malfunction">Printer Malfunction</option>
              <option value="Account Lockout">Account Lockout</option>
              <option value="Server Performance Issues">
                Server Performance Issues
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="Content" className="font-semibold">
              Content
            </label>
            <textarea
              name="Content"
              id="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-blue-900"
          >
            ADD INCIDENT
          </button>
        </form>
      </div>
    </div>
  );
}
