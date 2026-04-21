import PotCard from "@/components/cards/pots";

import TransactionsCard from "@/components/cards/TransactionCard";
import BillsSummaryCard from "@/components/cards/bills";
import Sidebar from "@/components/layout/SideBar";


export default function HomePage() {
  return (
   <div className="lg:ml-20 ">
      <Sidebar />
     <div className="bg-[#F7F4EF] min-h-screen p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Overview</h1>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>

      {/* TOP SUMMARY */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1E1E24] text-white p-6 rounded-xl">
          <p className="text-sm opacity-70">Current Balance</p>
          <h2 className="text-3xl font-bold">$0.00</h2>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <p className="text-sm text-gray-500">Income</p>
          <h2 className="text-3xl font-bold">$0.00</h2>
        </div>

        <div className="bg-white p-6 rounded-xl">
          <p className="text-sm text-gray-500">Expenses</p>
          <h2 className="text-3xl font-bold">$0.00</h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-2 space-y-6">

          {/* POTS (CUSTOM + CARD MIX) */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Pots</h3>
              <span className="text-sm text-gray-500 cursor-pointer">
                See Details →
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              
              {/* LEFT MINI CARD (custom) */}
              <div className="bg-[#F7F4EF] p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  💰
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pots</p>
                  <p className="text-xl font-bold">$0</p>
                </div>
              </div>

              {/* RIGHT: use your real card */}
              <PotCard />
            </div>
          </div>

          {/* TRANSACTIONS */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Transactions</h3>
              <span className="text-sm text-gray-500 cursor-pointer">
                See Details →
              </span>
            </div>

            {/* your card */}
            <TransactionsCard />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* BUDGETS (CUSTOM RING + CARD INFO STYLE) */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Budgets</h3>
              <span className="text-sm text-gray-500 cursor-pointer">
                See Details →
              </span>
            </div>

            {/* Custom donut (since your card doesn't match this UI) */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-20 border-orange-400 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-bold">$0</p>
                  <p className="text-xs text-gray-500">of $2,000 limit</p>
                </div>
              </div>

              <div className="mt-4 text-sm flex justify-between w-full">
                <span className="text-gray-500">Transportation</span>
                <span>$0.00</span>
              </div>
            </div>
          </div>

          {/* RECURRING BILLS */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Recurring Bills</h3>
              <span className="text-sm text-gray-500 cursor-pointer">
                See Details →
              </span>
            </div>

            {/* reuse your card */}
            <BillsSummaryCard />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}