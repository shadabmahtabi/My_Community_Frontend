import React, { useState } from "react";
import ProfileSection from "@/my-components/Profile/ProfileSection";
import DonationHistory from "@/my-components/Profile/DonationHistory";
import EditProfileModal from "@/my-components/Profile/EditProfileModal";
import LogoutButton from "@/my-components/Profile/LogoutButton";
import Navbar from "@/my-components/common-components/Navbar";
import ProfileDialog from "@/my-components/common-components/ProfileDialog";

const Profile = () => {
  // State for profile data
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [mobileNumber, setMobileNumber] = useState("+1234567890");

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProfileClick = () => setIsDialogOpen(true);

  // Modal visibility
  const [showModal, setShowModal] = useState(false);

  const handleGoToProfile = () => {
    navigate("/profile");
    setIsDialogOpen(false);
  };

  // Donation history data
  const donationHistory = [
    { id: 1, cause: "Helping the Homeless", amount: 100, date: "2024-11-26" },
    {
      id: 2,
      cause: "Support Education for All",
      amount: 150,
      date: "2024-11-25",
    },
    { id: 3, cause: "Clean Water for All", amount: 200, date: "2024-11-24" },
  ];

  // Total donations
  const totalDonated = donationHistory.reduce(
    (total, donation) => total + donation.amount,
    0
  );

  // Handle save changes
  const handleSaveChanges = (
    updatedName,
    updatedEmail,
    updatedMobileNumber
  ) => {
    setName(updatedName);
    setEmail(updatedEmail);
    setMobileNumber(updatedMobileNumber);
    setShowModal(false);
  };

  // Handle logout
  const handleLogout = () => {
    alert("Logged out!");
    // Add your logout logic here
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <Navbar handleProfileClick={handleProfileClick} />

      <h1 className="text-xl font-bold text-center mb-6 mt-24">Profile</h1>

      {/* Profile Section */}
      <ProfileSection
        name={name}
        email={email}
        mobileNumber={mobileNumber}
        totalDonated={totalDonated}
        onEdit={() => setShowModal(true)}
      />

      {/* Donation History */}
      <DonationHistory donationHistory={donationHistory} />

      {/* Logout Button */}
      <LogoutButton onLogout={handleLogout} />

      {/* Edit Profile Modal */}
      {showModal && (
        <EditProfileModal
          name={name}
          email={email}
          mobileNumber={mobileNumber}
          onSave={handleSaveChanges}
          onClose={() => setShowModal(false)}
        />
      )}

      <ProfileDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleLogout={handleLogout}
        handleGoToProfile={handleGoToProfile}
      />
    </div>
  );
};

export default Profile;
