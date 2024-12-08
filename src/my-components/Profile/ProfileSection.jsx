import React from "react";
import { FaPen } from "react-icons/fa";

const ProfileSection = ({ name, email, mobileNumber, totalDonated, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center space-x-4">
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">
          {name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <FaPen className="w-5 h-5 text-gray-500 cursor-pointer" onClick={onEdit} />
        </div>
        <p className="text-sm text-gray-700">{email}</p>
        <p className="text-sm text-gray-700">{mobileNumber}</p>
        <div className="text-sm text-gray-600 mt-2">
          Total Donations: <span className="text-green-600 font-semibold">₹{totalDonated}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
