import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahakar-Setu | NCCT AI-LMS, ERP & Employment Ecosystem",
  description: "AI & LMS-Enabled Cooperative Capacity Building, ERP & Employment Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-slate-100 text-slate-800 min-h-screen`}>

        {children}
      </body>
    </html>
  );
}
