'use client';

import Sidebar from "@/components/layout/SideBar";

export default function TransactionsPage() {
  return (
    <div className="ml-20">
      
      <Sidebar />
       <div className="p-8 bg-[#f5f3f1] min-h-screen">
      
      {/* 🔝 Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Transactions</h1>

        <button className="bg-gray-900 text-white px-5 py-3 rounded-xl font-medium">
          +Add New Transaction
        </button>
      </div>

      {/* 📦 Main Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        
        {/* 🔍 Top Controls */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search transaction"
            className="border border-gray-300 rounded-lg px-4 py-2 w-[320px] outline-none focus:ring-2 focus:ring-gray-300"
          />

          {/* Filters */}
          <div className="flex items-center gap-4 flex-wrap">
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Latest</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Filter by Category</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>All Transactions</option>
              </select>
            </div>

          </div>
        </div>

        {/* 📊 Table Header */}
        <div className="grid grid-cols-4 text-sm text-gray-500 border-b pb-3">
          <span>Recipient / Sender</span>
          <span>Category</span>
          <span>Transaction Date</span>
          <span className="text-right">Amount</span>
        </div>

        {/* ❌ Empty State */}
        <div className="py-20 text-center text-gray-500">
          No results.
        </div>

        {/* ⏭ Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-400">
            ◀ Prev
          </button>

          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-400">
            Next ▶
          </button>
        </div>

      </div>
    </div>
    </div>
   
  );
}