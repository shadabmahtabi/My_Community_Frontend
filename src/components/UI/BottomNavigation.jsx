import React from "react";
import { NavLink } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineProfile, AiFillHome } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";

const BottomNavigation = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              } hover:bg-gray-50 dark:hover:bg-gray-800`
            }
          >
            <div className="w-8 h-8 flex justify-center items-center">
              <AiFillHome className="w-full h-full" />
            </div>
            <span className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </NavLink>

          {/* About Link */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              } hover:bg-gray-50 dark:hover:bg-gray-800`
            }
          >
            <div className="w-8 h-8 flex justify-center items-center">
              <AiOutlineProfile className="w-full h-full" />
            </div>
            <span className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              About
            </span>
          </NavLink>

          {/* Books Link */}
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              } hover:bg-gray-50 dark:hover:bg-gray-800`
            }
          >
            <div className="w-8 h-8 flex justify-center items-center">
              <IoBookSharp className="w-full h-full" />
            </div>
            <span className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Books
            </span>
          </NavLink>

          {/* Contact Link */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              } hover:bg-gray-50 dark:hover:bg-gray-800`
            }
          >
            <div className="w-8 h-8 flex justify-center items-center">
              <FaHeadphones className="w-full h-full" />
            </div>
            <span className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Contact
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
