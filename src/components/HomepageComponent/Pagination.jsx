import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-6 mb-6 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages).keys()].map((number) => (
        <button
          key={number + 1}
          onClick={() => onPageChange(number + 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === number + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200"
          }`}
        >
          {number + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
