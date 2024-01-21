import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/shared/Navbar";
import StoreProvider from "./providers/StoreProvider";
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
          <StoreProvider>
            <ThemeProvider>
              <div className="flex flex-col h-screen ">
                <Navbar />
                <div className="">{children}</div>
              </div>
            </ThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
