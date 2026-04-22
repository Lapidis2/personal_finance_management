import { useState } from "react";

export function EditBudgetModal({
  category,
  maxSpend,
  theme,
  onClose,
}: {
  category: string;
  maxSpend: number;
  theme: string;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    category,
    maxSpend,
    theme,
  });

  const handleUpdate = () => {
    const budgets = JSON.parse(localStorage.getItem("budgets") || "[]");

    const updated = budgets.map((b: { category: string }) =>
      b.category === category
        ? {
            ...b,
            category: form.category,
            maxSpend: Number(form.maxSpend),
            theme: form.theme,
          }
        : b
    );

    localStorage.setItem("budgets", JSON.stringify(updated));
    window.location.reload(); // simple sync for now
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-100">

        <h2 className="text-lg font-semibold mb-4">Edit Budget</h2>

        <input
          className="border p-2 w-full mb-3"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          type="number"
          className="border p-2 w-full mb-3"
          value={form.maxSpend}
          onChange={(e) =>
            setForm({ ...form, maxSpend: Number(e.target.value) })
          }
        />

        <input
          className="border p-2 w-full mb-3"
          value={form.theme}
          onChange={(e) =>
            setForm({ ...form, theme: e.target.value })
          }
        />

        <button
          onClick={handleUpdate}
          className="bg-cyan-500 text-white w-full p-2 rounded"
        >
          Update
        </button>

        <button
          onClick={onClose}
          className="mt-2 text-sm text-gray-500 w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}