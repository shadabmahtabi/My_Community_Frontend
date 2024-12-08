"use client";

import React from "react";

const TopDonors = ({ donors }) => (
  
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-4 text-primary">Top Donors</h2>
    <div className="flex items-center justify-center gap-4">
      {donors.map((donor) => (
        <div
          key={donor.id}
          className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center justify-center text-center"
        >
          <img src={donor.image} alt={donor.name} className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-medium text-primary text-sm">{donor.name}</p>
            <p className="text-xs font-bold text-secondary">{donor.amount}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopDonors;
