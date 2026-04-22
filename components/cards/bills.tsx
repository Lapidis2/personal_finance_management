  
import { MessageSquare } from "lucide-react";
export default function BillsSummaryCard() {
  return (
    <div className="space-y-6">
      {/* Total Bills */}
      <div className="bg-[#1E1E24] text-white rounded-xl p-6 h-44 flex flex-col justify-between">
        <div className="text-2xl"><MessageSquare /></div>
        <div>
          <p className="text-sm opacity-70">Total bills</p>
          <p className="text-3xl font-bold">$0.00</p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl p-6 space-y-4">
        <h3 className="font-semibold">Summary</h3>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Paid bills</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Upcoming</span>
          <span>$0.00</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-sm">
          <span className="text-red-500">Due Soon</span>
          <span className="text-red-500">$0.00</span>
        </div>
        
      </div>
    </div>
  )
}