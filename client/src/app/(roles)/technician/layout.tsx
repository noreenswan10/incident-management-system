import SidebarTech from "@/components/sidebartechnician";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technician",
  description: "Technician Page",
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
        <SidebarTech />
      </div>

      {/* Content */}
      <div className="flex-grow bg-gray-100 p-6">
        {children}
      </div>
    </div>
  );
}