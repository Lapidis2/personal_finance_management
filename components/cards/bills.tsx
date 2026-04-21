'use client';

const bills = [
  { name: "Electricity", amount: 50, due: "Monthly" },
  { name: "Internet", amount: 30, due: "Monthly" },
  { name: "Gym", amount: 25, due: "Monthly" },
];

export default function BillsCard() {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h3 className="font-semibold mb-4">Recurring Bills</h3>

      <div className="space-y-3">
        {bills.map((bill, i) => (
          <div key={i} className="flex justify-between text-sm">
            <div>
              <p className="font-medium">{bill.name}</p>
              <p className="text-gray-500">{bill.due}</p>
            </div>

            <p className="font-semibold">${bill.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}