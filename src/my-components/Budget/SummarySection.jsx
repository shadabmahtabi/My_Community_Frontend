"use client";

import React from "react";

const SummarySection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    <div className="bg-primary text-white p-4 rounded-lg shadow-md">
      <h2 className="text-center text-sm font-medium">Total Income</h2>
      <p className="text-center text-xl font-bold text-green-300">₹10,000</p>
    </div>
    <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-center text-sm font-medium">Total Expenses</h2>
      <p className="text-center text-xl font-bold text-yellow-300">₹7,000</p>
    </div>
    <div className="bg-secondary text-white p-4 rounded-lg shadow-md">
      <h2 className="text-center text-sm font-medium">Remaining</h2>
      <p className="text-center text-xl font-bold text-white">₹3,000</p>
    </div>
  </div>
);

export default SummarySection;
