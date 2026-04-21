"use client"

export default function SpendingSummary() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-center mb-6">
        {/* Donut */}
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border-14 border-brown"></div>
          <div className="absolute inset-6 bg-white rounded-full flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">$0</span>
            <span className="text-sm text-gray-500">of $2,000 limit</span>
          </div>
        </div>
      </div>

      <h3 className="font-semibold mb-4">Spending Summary</h3>

      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-brown rounded-full"></span>
          Transportation
        </div>
        <span className="font-medium">$0.00 of $2000.00</span>
      </div>
    </div>
  )
}