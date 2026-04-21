'use client';

type Pot = {
  name: string;
  amount: number;
  color: string;
};

const pots: Pot[] = [
  { name: "Savings", amount: 159, color: "bg-green-400" },
  { name: "Gift", amount: 40, color: "bg-cyan-400" },
  { name: "Concert Ticket", amount: 110, color: "bg-purple-400" },
  { name: "New Laptop", amount: 10, color: "bg-yellow-400" },
];

export default function PotsCard() {
  const total = pots.reduce((acc, p) => acc + p.amount, 0);

  return (
    <div className="bg-white p-5 rounded-xl">
      <h3 className="font-semibold mb-4">Pots</h3>

      {/* Total */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-500">Total Saved</p>
        <h2 className="text-2xl font-bold">${total}</h2>
      </div>

      {/* Pots list */}
      <div className="space-y-3">
        {pots.map((pot, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span>{pot.name}</span>
              <span>${pot.amount}</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className={`${pot.color} h-2 rounded-full`}
                style={{ width: `${(pot.amount / total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}