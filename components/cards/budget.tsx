import { useState, useRef, useEffect } from "react";
import { EditBudgetModal } from "../models/editModel";

interface BudgetCardProps {
  category: string;
  maxSpend: number;
  theme: string;
  spent?: number;
}

export default function BudgetCard({
  category,
  maxSpend,
  theme,
  spent = 0,
}: BudgetCardProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [editOpen, setEditOpen] = useState(false);

  const free = maxSpend - spent;
  const progress = (spent / maxSpend) * 100;


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: theme }}
          />
          <h3 className="font-semibold">{category}</h3>
        </div>

        {/* Menu wrapper */}
        <div className="relative" ref={menuRef}>
        <button
  onClick={() => setOpenMenu((prev) => !prev)}
  className="text-xl cursor-pointer"
>
  ⋮
</button>

       
          {openMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-md z-20 overflow-hidden">
              
              <button
            onClick={() => {
  setEditOpen(true);
  setOpenMenu(false);
}}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  const budgets = JSON.parse(localStorage.getItem("budgets") || "[]");
                  const updated = budgets.filter((b: { category: string }) => b.category !== category);

                  localStorage.setItem("budgets", JSON.stringify(updated));
                  setOpenMenu(false);

                  window.dispatchEvent(new Event("storage")); // sync UI
                }}
                className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-100"
              >
                Delete
              </button>

            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Maximum of ${maxSpend.toFixed(2)}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${progress > 100 ? 100 : progress}%`,
            backgroundColor: theme,
          }}
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between text-sm mb-6">
        <div>
          <p className="text-gray-500">Spent</p>
          <p className="font-semibold">${spent.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-500">Free</p>
          <p className="font-semibold">${free.toFixed(2)}</p>
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
        <span className="text-sm text-gray-500 cursor-pointer">
          See All →
        </span>
      </div>
      {editOpen && (
  <EditBudgetModal
    category={category}
    maxSpend={maxSpend}
    theme={theme}
    onClose={() => setEditOpen(false)}
  />
)}
    </div>
    
  );
  
}