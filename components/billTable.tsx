export default function BillsTable() {
  return (
    <div className="bg-white rounded-xl p-6">
      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <input
          placeholder="Search bills"
          className="border rounded-lg px-4 py-2 w-72"
        />

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Sort by</span>
          <select className="border rounded-lg px-3 py-2">
            <option>Latest</option>
          </select>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 text-sm text-gray-500 border-b pb-3">
        <span>Bill Title</span>
        <span>Due Date</span>
        <span className="text-right">Amount</span>
      </div>

      {/* Empty State */}
      <div className="py-20 text-center text-gray-500 text-sm">
        No results.
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-6 text-sm text-gray-400">
        <button className="px-4 py-2 bg-gray-100 rounded">◀ Prev</button>
        <button className="px-4 py-2 bg-gray-100 rounded">Next ▶</button>
      </div>
    </div>
  )
}