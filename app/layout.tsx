"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  const [expanded, setExpanded] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("sidebar-expanded") === "true";
  });


  useEffect(() => {
    localStorage.setItem("sidebar-expanded", expanded.toString());
  }, [expanded]);

  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar expanded={expanded} setExpanded={setExpanded} />

          <main
            className={`flex-1 transition-all duration-300 ${
              expanded ? "lg:ml-56" : "lg:ml-20"
            }`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}