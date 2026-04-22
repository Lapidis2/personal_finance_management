"use client";

import {
  ArrowUpDown,
  LucideHome,
  MessageSquare,
  PieChart,
  DollarSignIcon,
  ArrowBigLeft,
  ArrowBigRight,

} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { icon: LucideHome, path: "/", label: "Home" },
  { icon: ArrowUpDown, path: "/transactions", label: "Transactions" },
  { icon: PieChart, path: "/budgets", label: "Budgets" },
  { icon: DollarSignIcon, path: "/pots", label: "Pots" },
  { icon: MessageSquare, path: "/recurring-bills", label: "Bills" },
];

export default function Sidebar( { expanded,setExpanded,}: {expanded: boolean; setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const pathname = usePathname();


  return (
    <>
      {/* ===================== DESKTOP ===================== */}
      <div
        className={`hidden lg:flex fixed top-0 left-0 h-full flex-col items-center py-6 bg-gray-950 rounded-tr-lg rounded-br-lg transition-all duration-300 ${
          expanded ? "w-56" : "w-20"
        }`}
      >
  
        <div className="text-white text-4xl font-bold">
          <Link href="/">f</Link>
        </div>

  
        <div className="flex flex-col space-y-4 pt-12 w-full px-2">
          {navLinks.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link key={index} href={item.path} className="w-full">
                <div
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-white text-cyan-300"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <Icon size={18} />

             
  {expanded && (
  <span className="text-sm whitespace-nowrap">
    {item.label}
  </span>
)}
                </div>
              </Link>
            );
          })}
        </div>

     
       <div className="mt-auto mb-4 w-full px-2">
<button
  onClick={() => setExpanded((prev) => !prev)}
  className={`flex items-center gap-3 p-3 rounded-lg w-full transition ${
    expanded
      ? "bg-white text-cyan-300"
      : "text-gray-300 hover:bg-gray-800"
  }`}
>
  {expanded ? (
    <ArrowBigLeft size={18} />
  ) : (
    <ArrowBigRight size={18} />
  )}

  {expanded && (
    <span className="text-sm whitespace-nowrap">
      Minimize menu
    </span>
  )}
</button>
</div>
      </div>

      {/* ===================== MOBILE (UNCHANGED) ===================== */}
      <div className="lg:hidden fixed bottom-0 left-0 h-16 w-full bg-gray-950 rounded-t-lg flex justify-around py-3 items-center">
        {navLinks.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              href={item.path}
              key={index}
              className="flex-1 h-full flex items-center justify-center relative ml-2"
            >
              <div
                className={`flex flex-col items-center justify-center w-full h-full transition ${
                  isActive
                    ? "text-cyan-300 bg-white h-1 mb-0 rounded-t-lg"
                    : "text-gray-300"
                }`}
              >
                <Icon size={18} />
              </div>

              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-300" />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}