export default function BudgetCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-brown rounded-full"></span>
          <h3 className="font-semibold">Transportation</h3>
        </div>
        <span className="text-xl">⋯</span>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Maximum of $2000.00
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-soft h-3 rounded-full mb-6"></div>

      {/* Stats */}
      <div className="flex justify-between text-sm mb-6">
        <div>
          <p className="text-gray-500">Spent</p>
          <p className="font-semibold">$0.00</p>
        </div>
        <div>
          <p className="text-gray-500">Free</p>
          <p className="font-semibold">$2000.00</p>
        </div>
      </div>

      {/* Latest Spending */}
      <div className="bg-cream rounded-lg p-4 flex justify-between items-center">
        <div>
          <h4 className="font-semibold mb-1">Latest Spending</h4>
          <p className="text-sm text-gray-500">
            You have not made any spendings yet.
          </p>
        </div>
        <span className="text-sm text-gray-500 flex items-center gap-1">
          See All →
        </span>
      </div>
    </div>
  )
}