"use client"
import Sidebar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import StatCard from "@/components/cards/StatsCard";
import BudgetCard from "@/components/cards/budget";
import PotsCard from "@/components/cards/pots";
import BillsCard from "@/components/cards/bills";
import TransactionsCard from "@/components/cards/TransactionCard";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#f5f3f1] ml-20">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <Header />

        
        <div className="mt-6 space-y-6">
          
          <div className="grid grid-cols-3 gap-4">
            <StatCard title="Current Balance" amount="$0.00" dark />
<StatCard title="Income" amount="$0.00" />
<StatCard title="Expenses" amount="$0.00" />
          </div>

        
          <div className="grid grid-cols-3 gap-6">
            {/* Left */}
            <div className="col-span-2 space-y-6">
             <PotsCard/>
             <TransactionsCard/>
            </div>

            
            <div className="space-y-6">
             <BudgetCard/>
             <BillsCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}