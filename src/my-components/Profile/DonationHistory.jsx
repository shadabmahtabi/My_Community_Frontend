import React from "react";

const DonationHistory = ({ donationHistory }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Donation History</h2>
      <div className="space-y-4">
        {donationHistory.map((donation) => (
          <div key={donation.id} className="flex justify-between items-center border-b py-2">
            <div>
              <p className="text-sm font-medium">{donation.cause}</p>
              <p className="text-xs text-gray-500">{donation.date}</p>
            </div>
            <p className="text-green-600 font-semibold">₹{donation.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationHistory;
