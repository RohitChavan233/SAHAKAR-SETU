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
        {/* Top Switcher Bar (Global for demo purposes) */}
        <div className="bg-slate-900 text-white px-6 py-2.5 flex flex-wrap items-center justify-between text-xs border-b border-slate-700 sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white font-bold px-2 py-0.5 rounded">SIH26087 PROTOTYPE</span>
            <span className="text-slate-300">Ministry of Cooperation — National Council for Cooperative Training (NCCT)</span>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <a href="/" className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded font-semibold transition inline-block">
              📸 Screen 1: Login Portal
            </a>
            <a href="/dashboard" className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded font-semibold transition inline-block">
              📸 Screen 2: Dashboard
            </a>
          </div>
        </div>
        
        {children}
      </body>
    </html>
  );
}
