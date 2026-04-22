"use client";

import { useState } from "react";
import { X } from "lucide-react";

const themes = [
  "#3B82F6",
  "#22C55E",
  "#EF4444",
  "#F59E0B",
  "#A855F7",
  "#06B6D4",
  "#F97316",
  "#14B8A6",
  "#EC4899",
  "#84CC16",
];

export default function AddBudgetModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    category: "",
    maxSpend: "",
    theme: "",
    openTheme: false,
  });

  const handleSubmit = () => {
    const newBudget = {
      id: crypto.randomUUID(),
      category: form.category,
      maxSpend: Number(form.maxSpend),
      theme: form.theme,
    };

    const existing = JSON.parse(localStorage.getItem("budgets") || "[]");
    localStorage.setItem(
      "budgets",
      JSON.stringify([...existing, newBudget])
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-105 rounded-xl p-6 relative">

   
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Add New Budget</h2>

        <p className="text-sm text-gray-500 mb-6">
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>

        {/* Category */}
        <div className="mb-4">
          <label className="text-sm font-medium">Category</label>
          <select
            className="w-full border p-2 rounded mt-1"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          >
            <option value="">Select a category</option>
            <option>Groceries</option>
            <option>Transportation</option>
            <option>Entertainment</option>
            <option>Shopping</option>
          </select>
        </div>

        {/* Maximum Spend */}
        <div className="mb-4">
          <label className="text-sm font-medium">Maximum Spend</label>
          <input
            type="number"
            placeholder="e.g. $2000"
            className="w-full border p-2 rounded mt-1"
            value={form.maxSpend}
            onChange={(e) =>
              setForm({ ...form, maxSpend: e.target.value })
            }
          />
        </div>

        {/* Theme Dropdown */}
        <div className="mb-6 relative">
          <label className="text-sm font-medium">Theme</label>

          {/* Selected */}
          <div
            onClick={() =>
              setForm({ ...form, openTheme: !form.openTheme })
            }
            className="w-full border p-2 rounded mt-1 cursor-pointer flex items-center justify-between"
          >
            <span>
              {form.theme ? "Selected" : "Select a theme"}
            </span>

            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: form.theme || "#ddd" }}
            />
          </div>

          {/* Dropdown */}
          {form.openTheme && (
            <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-md p-2 grid grid-cols-5 gap-2 z-10">
              {themes.map((color) => (
                <div
                  key={color}
                  onClick={() =>
                    setForm({
                      ...form,
                      theme: color,
                      openTheme: false,
                    })
                  }
                  className="w-5 h-5 rounded-full cursor-pointer border hover:scale-110 transition"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}