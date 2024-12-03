'use client'
import { useAuth } from "@/context/authcontext";
import { incidentreport } from "@/data/incidentreport";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NoAccess = dynamic(() => import('@/components/noaccess'))

export default function IncidentReport() {
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
    <div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Report ID
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Category
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Details
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {incidentreport.map((report) => (
            <tr key={report.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {report.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">{report.category}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {report.details}
              </td>
              <td className="px-6 py-4 text-sm text-green-600">{report.status}</td>
              <td className="px-6 py-4 text-sm">
                <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none ml-4">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
