"use client";

import React, { useState } from "react";
import Navbar from "@/my-components/common-components/Navbar";
import SummarySection from "@/my-components/Budget/SummarySection";
import ChartSection from "@/my-components/Budget/ChartSection";
import TransactionHistory from "@/my-components/Budget/TransactionHistory";
import ProfileDialog from "@/my-components/common-components/ProfileDialog";

const transactions = [
  { category: "Rent", amount: 5000, date: "2024-11-20" },
  { category: "Food", amount: 2000, date: "2024-11-18" },
  { category: "Utilities", amount: 1000, date: "2024-11-15" },
  { category: "Entertainment", amount: 500, date: "2024-11-10" },
];

const Budget = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProfileClick = () => setIsDialogOpen(true);
  const handleLogout = () => {
    console.log("User Logged Out");
    setIsDialogOpen(false);
    // Implement logout logic here
  };
  const handleGoToProfile = () => {
    navigate("/profile");
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar handleProfileClick={handleProfileClick} />
      <div className="pt-24 px-4">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Budget Overview
        </h1>
        <SummarySection />
        <ChartSection />
        <TransactionHistory transactions={transactions} />
      </div>
      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default Budget;
