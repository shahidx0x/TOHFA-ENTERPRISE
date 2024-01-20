"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useAppSelector } from "@/lib/hooks";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const currentTheme = useAppSelector(state => state.theme.value);
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={currentTheme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
