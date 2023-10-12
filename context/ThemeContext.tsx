"use client";
import { createContext, useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

interface themeProviderType {
  toggle?: () => void;
  mode?: string;
}
export const ThemeContext = createContext<themeProviderType>({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<string>("light");

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <SnackbarProvider
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <ThemeContext.Provider value={{ toggle, mode }}>
        <div className={`theme ${mode}`}>{children}</div>
      </ThemeContext.Provider>
    </SnackbarProvider>
  );
};
