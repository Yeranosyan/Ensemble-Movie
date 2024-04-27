import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertainment",
  description: "Movie Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950  dark:bg-black/90 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
