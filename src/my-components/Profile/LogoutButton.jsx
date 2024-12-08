import React from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onLogout}
        className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
