"use client";
import { useAuth } from "@/context/authcontext";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa"; // Icons from react-icons
import { FaRightFromBracket, FaSquarePlus } from "react-icons/fa6";

type SidebarProps = {};

const SidebarTech: React.FC<SidebarProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { logout }: any = useAuth();

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all bg-gray-800 text-white`}
    >
      {/* Sidebar toggle button */}
      <div className="flex items-center justify-center p-4">
        <button
          onClick={handleToggleSidebar}
          className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
        >
          {isCollapsed ? (
            <FaAngleDoubleRight className="text-white" />
          ) : (
            <FaAngleDoubleLeft className="text-white" />
          )}
        </button>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col mt-4 w-full">
          <Link href="/technician">
            <div className="flex items-center px-4 py-3 hover:bg-gray-700">
              <FaHome className="text-lg" />
              {!isCollapsed && <span className="ml-4">Home</span>}
            </div>
          </Link>
          <Link href="/technician">
            <div className="flex items-center px-4 py-3 hover:bg-gray-700">
              <FaSquarePlus className="text-lg" />
              {!isCollapsed && <span className="ml-4">Add Incident</span>}
            </div>
          </Link>

          <div
            onClick={() => logout()}
            className="cursor-pointer flex items-center px-4 py-3 hover:bg-gray-700"
          >
            <FaRightFromBracket className="text-lg" />
            {!isCollapsed && <span className="ml-4">Logout</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarTech;
