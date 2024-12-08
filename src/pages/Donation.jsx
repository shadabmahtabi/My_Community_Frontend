"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/my-components/common-components/Navbar";
import ProfileDialog from "@/my-components/common-components/ProfileDialog";
import CauseCard from "@/my-components/Donation/CauseCard";

const causes = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    name: "Helping the Homeless",
    description:
      "We are collecting donations to support homeless shelters in our community. Every contribution helps provide food, shelter, and essential items.",
    targetAmount: 5000,
    raisedAmount: 2200,
    donationHistory: [
      { id: 1, name: "John Doe", amount: "₹100", date: "2024-11-26" },
      { id: 2, name: "Jane Smith", amount: "₹150", date: "2024-11-25" },
      { id: 3, name: "Emily Johnson", amount: "₹200", date: "2024-11-24" },
    ],
  },
  // Add other causes here...
];

const Donation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

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
      {/* Navbar */}
      <Navbar handleProfileClick={handleProfileClick} />

      {/* Main Content */}
      <div className="pt-28 px-4">
        <h1 className="text-2xl font-semibold text-center  mb-6">
          Donation Causes
        </h1>

        {/* Render Cause Cards */}
        {causes.map((cause) => (
          <CauseCard key={cause.id} cause={cause} />
        ))}
      </div>

      {/* Profile Dialog */}
      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default Donation;
