"use client";

import ContactForm from "@/my-components/Contact/ContactForm";
import ContactInfo from "@/my-components/Contact/ContactInfo";
import Navbar from "@/my-components/common-components/Navbar";
import ProfileDialog from "@/my-components/common-components/ProfileDialog";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate()
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar handleProfileClick={handleProfileClick} />

      {/* Main Content */}
      <div className="p-4 mt-24">
        <h1 className="text-xl font-bold text-center mb-6">Contact Us</h1>
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Profile Options Dialog */}
      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default Contact;
