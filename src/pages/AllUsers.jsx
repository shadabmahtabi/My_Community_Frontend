"use client";

import AllDonators from "@/my-components/AllUser/AllDonators";
import TopDonors from "@/my-components/AllUser/TopDonors";
import Navbar from "@/my-components/common-components/Navbar";
import ProfileDialog from "@/my-components/common-components/ProfileDialog";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const img =
    "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg";
  const navigate = useNavigate();

  const topDonors = [
    { id: 1, name: "John Doe", image: img, amount: "₹1000" },
    { id: 2, name: "Jane Smith", image: img, amount: "₹900" },
    { id: 3, name: "Emily Johnson", image: img, amount: "₹800" },
  ];

  const allUsers = [
    {
      id: 1,
      name: "John Doe",
      image: img,
      amount: "₹1000",
      date: "2024-11-20",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: img,
      amount: "₹900",
      date: "2024-11-18",
    },
    {
      id: 3,
      name: "Emily Johnson",
      image: img,
      amount: "₹800",
      date: "2024-11-15",
    },
    {
      id: 4,
      name: "Michael Brown",
      image: img,
      amount: "₹500",
      date: "2024-11-10",
    },
    {
      id: 5,
      name: "Sarah Wilson",
      image: img,
      amount: "₹400",
      date: "2024-11-05",
    },
  ];

  const totalDonations = allUsers.reduce(
    (total, user) => total + parseInt(user.amount.replace(/₹|,/g, "")),
    0
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProfileClick = () => setIsDialogOpen(true);
  const handleLogout = () => {
    console.log("User Logged Out");
    setIsDialogOpen(false);
  };
  const handleGoToProfile = () => {
    navigate("/profile");
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-primary">
      <Navbar handleProfileClick={handleProfileClick} />
      <div className="pt-28 px-4">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Our Heroes
        </h1>
        <TopDonors donors={topDonors} image={img} />
        <AllDonators users={allUsers} totalDonations={totalDonations} />
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

export default AllUsers;
