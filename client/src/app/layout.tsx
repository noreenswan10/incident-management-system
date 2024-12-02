import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/authcontext";

export const metadata: Metadata = {
  title: {
    template: '%s | Incident Management System',
    default: 'Incident Management System'
  },
  description: 'The Incident Management System (IMS) is a platform designed to streamline the process of logging, tracking, and resolving IT-related incidents within an organization. It ensures that issues are documented, prioritized, and addressed efficiently, reducing downtime and improving service reliability.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
