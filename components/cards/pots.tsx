"use client"

const TOTAL = 2500
const SAVED = 0

export default function PotCard() {
  const percentage = (SAVED / TOTAL) * 100

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-teal-600 rounded-full" />
          <h3 className="font-semibold">Daily food</h3>
        </div>
        <span className="cursor-pointer">⋯</span>
      </div>

      {/* Total Saved */}
      <div className="flex justify-between items-end mb-4">
        <p className="text-gray-500 text-sm">Total Saved</p>
        <p className="text-3xl font-bold">$0.00</p>
      </div>

      {/* Progress */}
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-teal-600 transition-all duration-700"
          style={{ width: `${percentage === 0 ? 4 : percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500 mb-6">
        <span>{percentage.toFixed(2)}%</span>
        <span>Target of ${TOTAL.toLocaleString()}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="flex-1 bg-[#F7F4EF] py-2 rounded-lg font-medium">
          + Add Money
        </button>
        <button className="flex-1 bg-[#F7F4EF] py-2 rounded-lg font-medium">
          Withdraw
        </button>
      </div>
    </div>
  )
}