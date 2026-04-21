'use client';

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Entertainment", value: 50, color: "#8b5cf6" },
  { name: "Bills", value: 750, color: "#22c55e" },
  { name: "Dining", value: 75, color: "#06b6d4" },
  { name: "Personal Care", value: 100, color: "#f59e0b" },
];

export default function BudgetCard() {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h3 className="font-semibold mb-4">Budgets</h3>

      <div className="flex items-center justify-between">
        {/* Donut */}
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={50}
            outerRadius={70}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* Legend */}
        <div className="space-y-2 text-sm">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: item.color }}
              />
              <span>{item.name}</span>
              <span className="ml-auto font-semibold">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}