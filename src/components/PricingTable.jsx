"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PricingTable({ plans }) {
  const featureKeys = Object.keys(plans[0]?.features || {});

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl ${
                plan.recommended
                  ? "ring-2 ring-violet-500 relative scale-[1.02]"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 h-full flex flex-col">
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-violet-600 dark:text-violet-400">
                      {plan.price}
                    </span>
                    {plan.billing && (
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        ({plan.billing})
                      </span>
                    )}
                  </div>
                  {plan.bestFor && (
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Best for: {plan.bestFor}
                    </p>
                  )}
                </div>

                {/* Features list */}
                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {Object.entries(plan.features).map(([key, value], i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          <strong className="capitalize">{key}:</strong> {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.recommended
                      ? "bg-violet-600 hover:bg-violet-700 text-white"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
                  }`}
                >
                  {plan.cta || "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Plan Comparison
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-4 px-6 text-left text-gray-500 dark:text-gray-400 font-normal">
                    Feature
                  </th>
                  {plans.map((plan, idx) => (
                    <th
                      key={idx}
                      className={`py-4 px-6 text-center ${
                        plan.recommended
                          ? "bg-violet-50 dark:bg-violet-900/30"
                          : ""
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((key, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300 capitalize">
                      {key}
                    </td>
                    {plans.map((plan, planIdx) => (
                      <td
                        key={planIdx}
                        className={`py-4 px-6 text-center ${
                          plan.recommended
                            ? "bg-violet-50 dark:bg-violet-900/30"
                            : ""
                        }`}
                      >
                        {plan.features[key] ? (
                          <span className="text-sm text-gray-800 dark:text-white">
                            {plan.features[key]}
                          </span>
                        ) : (
                          <svg
                            className="h-5 w-5 text-red-500 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section (unchanged) */}
        {/* ... your FAQ section code here ... */}
      </div>
    </div>
  );
}
