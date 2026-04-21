import BillsSummaryCard from "@/components/cards/bills"
import BillsTable from "@/components/billTable"
import Sidebar from "@/components/layout/SideBar"

export default function RecurringBillsPage() {
  return (
 <div className="lg:ml-20">
  <Sidebar/>
     <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Recurring Bills</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        <BillsSummaryCard />
        <BillsTable />
      </div>
    </div>
 </div>
  )
}