"use client";

import { useState } from "react";
import { Budget, themes } from "@/types/budget";

export default function AddBudgetModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    category: "",
    maxSpend: "",
    theme: "",
  });

  const selectTheme = (color: string) => {
    setForm({ ...form, theme: color });
  };

  const handleSubmit = () => {
    const newBudget: Budget = {
      id: crypto.randomUUID(),
      category: form.category,
      maxSpend: Number(form.maxSpend),
      theme: form.theme,
    };

    const existing = JSON.parse(localStorage.getItem("budgets") || "[]");
    localStorage.setItem("budgets", JSON.stringify([...existing, newBudget]));

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-100 max-w-md">

        <h2 className="text-lg font-semibold mb-3">Add New Budget</h2>

        {/* Category */}
        <input
          placeholder="Category (e.g Groceries)"
          className="border p-2 w-full mb-3"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        {/* Max Spend */}
        <input
          placeholder="Max Spend"
          type="number"
          className="border p-2 w-full mb-3"
          onChange={(e) => setForm({ ...form, maxSpend: e.target.value })}
        />

        {/* Theme picker */}
        <p className="text-sm mb-2">Choose theme</p>
        <div className="flex gap-2 mb-4">
          {themes.map((color) => (
            <div
              key={color}
              onClick={() => selectTheme(color)}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                form.theme === color ? "border-black" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="bg-cyan-500 text-white w-full p-2 rounded"
        >
          Add Budget
        </button>
      </div>
    </div>
  );
}