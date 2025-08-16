import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Travel Haven",
  description: "Feel at home, away from home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <Navbar />
        <main className="container py-10">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
