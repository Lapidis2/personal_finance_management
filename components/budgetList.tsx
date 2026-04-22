"use client";

import { useState, useEffect } from "react";
import BudgetCard from "./cards/budget";

interface Budget {
  id: string;
  category: string;
  maxSpend: number;
  theme: string;
}

export default function BudgetList() {
  const [budgets, setBudgets] = useState<Budget[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("budgets") || "[]");
  });

  
  useEffect(() => {
    const handleStorage = () => {
      const data = JSON.parse(localStorage.getItem("budgets") || "[]");
      setBudgets(data);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="grid md:grid-cols-1 gap-6">
      {budgets.map((b) => (
        <BudgetCard
          key={b.id}
          category={b.category}
          maxSpend={b.maxSpend}
          theme={b.theme}
          spent={0}
        />
      ))}
    </div>
  );
}