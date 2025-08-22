import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/app/providers";

import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="" suppressHydrationWarning>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
            <Toaster position="top-right" />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
