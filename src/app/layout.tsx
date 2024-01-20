import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/shared/Navbar";
import StoreProvider from "./providers/StoreProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "./providers/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FGY-Y2J",
  description: "FGY-Y2J NEXT-14SHADCN",
};

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <AuthProvider>
            <StoreProvider>
              <ThemeProvider>
                <Navbar />
                {children}
              </ThemeProvider>
            </StoreProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
