import SidebarAdmin from "@/components/sidebaradmin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div>
        <SidebarAdmin />
      </div>

      {/* Content */}
      <div className="flex-grow bg-gray-100 p-6">
        {children}
      </div>
    </div>
  );
}
