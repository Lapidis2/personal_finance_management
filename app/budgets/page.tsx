"use client"
import BudgetList from "@/components/budgetList";
import AddBudgetModal from "@/components/models/AddBudgetModal";
import SpendingSummary from "@/components/spendSummary"
import { useState } from "react";

export default function BudgetsPage() {
  const [open, setOpen] = useState(false);
  return (
   <div className="lg:ml-20">
  
     <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-text">Budgets</h1>
       <button
        onClick={() => setOpen(true)}
        className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
      >
        Add New Budget
      </button>
    
      {open && <AddBudgetModal onClose={() => setOpen(false)} />}
      </div>

      
      
    </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
  
 
  <div className="lg:col-span-1">
     <SpendingSummary />
    
  </div>

  
  <div className="lg:col-span-2">
   <BudgetList />
  </div>

</div>
      
   </div>
  )
}