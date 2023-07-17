import "./globals.css";
import { Inter } from "next/font/google";

import { Metadata } from "next";
import { Providers } from "@/components/Providers";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "EDUMGT",
  description: "Система управления образовательной организацией",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
