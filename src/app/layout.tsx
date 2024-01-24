import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./providers/StoreProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import NavbarT from "@/components/shared/NavbarT";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOHFA ENTERPRISE",
  description: "TOHFA ENTERPRISE",
};

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <StoreProvider>
            <ThemeProvider>
              <div className="flex flex-col h-screen ">
                <NavbarT />
                <div className="">
                  <Toaster />
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
