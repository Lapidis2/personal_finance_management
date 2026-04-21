"use client";
import {
  ArrowUpDown,
  LucideHome,
  MessageSquare,
  PieChart,
  DollarSignIcon,
  LogOut,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    icon: LucideHome,
    path: "/",
  },
  {
    icon: ArrowUpDown,
    path: "/transactions",
  },
  {
    icon: PieChart,
    path: "/budgets",
  },
  {
    icon: DollarSignIcon,
    path: "/pots",
  },
  {
    icon: MessageSquare,
    path: "/recurring-bills",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
  <>
   <div className="hidden lg:flex fixed top-0 left-0  h-full w-20 items-center py-6 flex-col bg-gray-950 rounded-tr-lg rounded-br-lg">
      <div className="text-white text-4xl font-bold">
        <Link href={"/"}>f</Link>
      </div>

      <div className="items-center flex flex-col space-y-6 justify-center pt-12">
        {navLinks.map((item, index) => {
      
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
            href={item.path}
          key={index}
           onClick={() => router.push(item.path)}
           className={`p-3 cursor-pointer  transition ${
            isActive
            ?"text-cyan-300"
            :"text-gray-300"
        }`}

           >
            <Icon size={15} />
           </Link>
          )
          
        })}
      </div>

      <div className="text-white text-2xl font-bold mt-40">
        <Link href={"/login"} ><LogOut size={15} /></Link>
      </div>
    </div>
    
  
  
  </>
)
}
