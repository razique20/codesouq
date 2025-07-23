"use client";

import React from "react";

export default function PricingTable({ plans }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4">
      {plans.map((plan, idx) => (
        <div key={idx} className="bg-white dark:bg-zinc-900 shadow-xl p-6 rounded-2xl">
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="text-2xl font-semibold text-violet-600 my-2">{plan.price}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {plan.features.map((feat, i) => (
              <li key={i}>✅ {feat}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
