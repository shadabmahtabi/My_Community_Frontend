import BoxesContainer from "@/my-components/Homepage/BoxContainer";
import Navbar from "@/my-components/common-components/Navbar";
import ProfileDialog from "@/my-components/common-components/ProfileDialog";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeBox, setActiveBox] = useState(null);
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
  const handleBoxClick = (boxId, path) => {
    setActiveBox(boxId);
    navigate(path);
  };

  return (
    <div
      className="min-h-screen bg-white
    "
    >
      <Navbar handleProfileClick={handleProfileClick} />
      <div className="mt-24 mb-12 pt-12">
        <h1 className="text-center text-2xl text-primary font-semibold">
          Welcome to our community
        </h1>
      </div>
      <BoxesContainer activeBox={activeBox} handleBoxClick={handleBoxClick} />

      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default Homepage;
