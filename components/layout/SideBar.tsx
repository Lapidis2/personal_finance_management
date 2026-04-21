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




{/* =====================================mobile=============================== */}
 <div className="lg:hidden fixed bottom-0 left-0 h-16 w-full bg-gray-950 rounded-t-lg flex justify-around py-3 items-center">
    
      
      
  {navLinks.map((item, index) => {
    const Icon = item.icon;
    const isActive = pathname === item.path;

    return (
      <Link
        href={item.path}
        key={index}
        className="flex-1 h-full flex items-center justify-center relative ml-2  "
      >
        <div
          className={`flex flex-col items-center justify-center w-full h-full transition ${
            isActive ? "text-cyan-300 bg-white h-1 mb-0 rounded-t-lg" : "text-gray-300"
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
)
}
