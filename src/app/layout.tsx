import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../../context/ThemeContext";
import AuthProvider from "../components/AuthProvider/index";
import ReactQueryProvider from "../utils/ReactClientProvider";

const fira = Fira_Sans({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOO SUNGJAE HANS",
  description: "HANS' PERSONAL WEBSITE & PORTFOLIO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <ReactQueryProvider>
          <ThemeProvider>
            <AuthProvider>
              <div className="container">
                <Navbar />
                {children}
                <Footer />
              </div>
            </AuthProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
