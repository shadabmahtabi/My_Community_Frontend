"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

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
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Support Education for All",
    description:
      "Donations to fund educational programs and school supplies for underprivileged children.",
    targetAmount: 7000,
    raisedAmount: 3500,
    donationHistory: [
      { id: 1, name: "Michael Brown", amount: "₹50", date: "2024-11-23" },
      { id: 2, name: "Sarah Wilson", amount: "₹300", date: "2024-11-22" },
    ],
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Clean Water for All",
    description:
      "Our mission is to provide clean water solutions to communities in need around the world.",
    targetAmount: 10000,
    raisedAmount: 5000,
    donationHistory: [
      { id: 1, name: "Robert Lee", amount: "₹500", date: "2024-11-21" },
      { id: 2, name: "Linda Davis", amount: "₹200", date: "2024-11-20" },
    ],
  },
];

const Donation = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsDialogOpen(true);
  };

  const handleLogout = () => {
    console.log("User Logged Out");
    setIsDialogOpen(false);
    // Implement logout logic here
  };

  const handleGoToProfile = () => {
    navigate("/profile"); // Navigate to profile page
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-gray-100 z-10">
        <div className="flex items-center justify-between p-4 bg-white">
          <img
            src="../../../joda masjid logo.png"
            alt="Logo"
            className="w-20 h-20"
          />
          <h1 className="text-center text-lg">
            Hello, <span className="font-bold">Username</span> 🖐️
          </h1>
          <div
            className="h-8 w-8 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={handleProfileClick}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 px-4">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Donation Causes
        </h1>

        {causes.map((cause) => {
          const progressPercentage =
            (cause.raisedAmount / cause.targetAmount) * 100;

          return (
            <div
              key={cause.id}
              className="bg-white rounded-lg shadow-md p-4 mb-6"
            >
              {/* Cause Image */}
              <img
                src={cause.image}
                alt={cause.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {cause.name}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{cause.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                {/* Ensure we don't divide by zero and ensure the percentage is capped at 100 */}
                <Progress
                  value={Math.min(
                    cause.targetAmount > 0
                      ? (cause.raisedAmount / cause.targetAmount) * 100
                      : 0,
                    100
                  )}
                  max={100}
                  className="rounded-full h-4 bg-gray-200"
                  color="green"
                />
                <div className="text-center mt-2">
                  <p className="text-sm font-semibold text-gray-700">
                    {`₹${cause.raisedAmount.toLocaleString()} raised of ₹${cause.targetAmount.toLocaleString()} goal`}
                  </p>
                </div>
                <Button className="mt-4">Donate now</Button>
              </div>

              {/* Donation History */}
              <h3 className="text-md font-semibold mb-3 text-gray-800">
                Recent Donations
              </h3>
              <div className="bg-gray-50 rounded-lg p-3">
                {cause.donationHistory.length === 0 ? (
                  <p className="text-sm text-gray-500">No donations yet.</p>
                ) : (
                  cause.donationHistory.map((donation) => (
                    <div
                      key={donation.id}
                      className="flex justify-between items-center border-b last:border-none py-2"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {donation.name}
                        </p>
                        <p className="text-xs text-gray-500">{donation.date}</p>
                      </div>
                      <p className="text-green-600 font-semibold">
                        {donation.amount}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Profile Options Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile Options</DialogTitle>
            <DialogDescription>Choose an option</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={handleGoToProfile}
              className="w-full bg-blue-500 text-white p-2 rounded mb-2"
            >
              Go to Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white p-2 rounded"
            >
              <FiLogOut className="inline-block mr-2" />
              Logout
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Donation;
