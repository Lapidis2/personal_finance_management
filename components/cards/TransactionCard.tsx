'use client';

const transactions = [
  { name: "Netflix", date: "Today", amount: -15 },
  { name: "Salary", date: "Yesterday", amount: 2000 },
  { name: "Groceries", date: "2 days ago", amount: -120 },
  { name: "Spotify", date: "3 days ago", amount: -10 },
];

export default function TransactionsCard() {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h3 className="font-semibold mb-4">Transactions</h3>

      <div className="space-y-4">
        {transactions.map((t, i) => (
          <div key={i} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-xs text-gray-500">{t.date}</p>
            </div>

            <p
              className={`font-semibold ${
                t.amount > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {t.amount > 0 ? "+" : "-"}${Math.abs(t.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}