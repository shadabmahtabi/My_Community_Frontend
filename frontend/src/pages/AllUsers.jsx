"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // for navigation

const AllUsers = () => {
  const img = "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg";
  const navigate = useNavigate(); // To navigate to the profile page

  const topDonors = [
    { id: 1, name: "John Doe", image: img, amount: "₹1000" },
    { id: 2, name: "Jane Smith", image: img, amount: "₹900" },
    { id: 3, name: "Emily Johnson", image: img, amount: "₹800" },
  ];

  const allUsers = [
    { id: 1, name: "John Doe", image: img, amount: "₹1000", date: "2024-11-20" },
    { id: 2, name: "Jane Smith", image: img, amount: "₹900", date: "2024-11-18" },
    { id: 3, name: "Emily Johnson", image: img, amount: "₹800", date: "2024-11-15" },
    { id: 4, name: "Michael Brown", image: img, amount: "₹500", date: "2024-11-10" },
    { id: 5, name: "Sarah Wilson", image: img, amount: "₹400", date: "2024-11-05" },
  ];

  const totalDonations = allUsers.reduce(
    (total, user) => total + parseInt(user.amount.replace(/₹|,/g, "")),
    0
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

  const handleProfileClick = () => {
    setIsDialogOpen(true); // Open profile options dialog
  };

  const handleLogout = () => {
    console.log("User Logged Out");
    setIsDialogOpen(false);
    // Implement logout logic here (e.g., clearing tokens or user data)
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
          <img src="../../../joda masjid logo.png" alt="Logo" className="w-20 h-20" />
          <h1 className="text-center text-lg">
            Hello, <span className="font-bold">Username</span> 🖐️
          </h1>
          <div
            className="h-12 w-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
            onClick={handleProfileClick} // Open the profile options dialog
          >
            <img src={img} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-28 px-4">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Our Heroes</h1>

        {/* Top Donors Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Top Donors</h2>
          <div className="flex items-center justify-center gap-4">
            {topDonors.map((donor) => (
              <div key={donor.id} className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center justify-center text-center">
                <img src={donor.image} alt={donor.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-medium text-gray-800 text-sm">{donor.name}</p>
                  <p className="text-xs font-bold text-green-600">{donor.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donators Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800 mb-3">All Donators</h2>
            <h2 className="text-green-500 font-semibold">Total = ₹{totalDonations.toLocaleString()}</h2>
          </div>
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-2">Name</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-2 flex items-center">
                    <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
                    {user.name}
                  </td>
                  <td className="py-2 text-green-500 font-semibold">{user.amount}</td>
                  <td className="py-2">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Profile Options Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile Options</DialogTitle>
            <DialogDescription>Choose an option</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button onClick={handleGoToProfile} className="w-full bg-blue-500 text-white p-2 rounded mb-2">
              Go to Profile
            </button>
            <button onClick={handleLogout} className="w-full bg-red-500 text-white p-2 rounded">
              <FiLogOut className="inline-block mr-2" />
              Logout
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllUsers;
