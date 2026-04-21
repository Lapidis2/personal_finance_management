import BudgetCard from "@/components/cards/budget"
import Sidebar from "@/components/layout/SideBar"
import SpendingSummary from "@/components/spendSummary"

export default function BudgetsPage() {
  return (
   <div className="ml-20">
    <Sidebar/>
     <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-text">Budgets</h1>
        <button className="bg-black text-white px-5 py-2 rounded-lg">
          + Add New Budget
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SpendingSummary />
        <BudgetCard />
      </div>
    </div>
   </div>
  )
}