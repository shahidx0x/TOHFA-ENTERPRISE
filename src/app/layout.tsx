import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./providers/StoreProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import NavbarT from "@/components/shared/NavbarT";
import Footer from "@/components/shared/Footer";
import "rsuite/dist/rsuite-no-reset.min.css";
import { CustomProvider } from "rsuite";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOHFA ENTERPRISE",
  description: "",
};

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <StoreProvider>
            <CustomProvider>
              <ThemeProvider>
                <NavbarT />
                {children}
                <Toaster />
                <Footer />
              </ThemeProvider>
            </CustomProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
