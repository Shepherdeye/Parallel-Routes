import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";


interface AppLayoutProps {
  children: ReactNode;
}


export const metadata: Metadata = {
  title: "Parallel Routes",
  description: "create a parallel route",
};


export default function RootLayout({ children }: AppLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
