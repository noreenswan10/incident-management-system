import SidebarUser from "@/components/sidebaruser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User",
  description: "User Page",
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
        <SidebarUser />
      </div>

      {/* Content */}
      <div className="flex-grow bg-gray-100 p-6">
        {children}
      </div>
    </div>
  );
}
