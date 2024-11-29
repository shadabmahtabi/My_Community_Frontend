import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleProfileClick }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white">
      <div className="w-full flex items-center justify-between p-4 ">
        <div className="w-1/4 h-1/4">
          <Link to="/">
            <img
              src="../../../joda masjid logo.png"
              alt="Logo"
              className="w-full h-full cursor-pointer" // Cursor indicates it's clickable
            />
          </Link>
        </div>

        <div>
          <h1 className="text-center text-lg text-primary">
            Hello,{" "}
            <span className="font-semibold text-secondary">Username</span> 🖐️
          </h1>
        </div>
        <div
          className="h-8 w-8 bg-black rounded-full overflow-hidden flex items-center justify-center mr-4 cursor-pointer"
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
  );
};

export default Navbar;
