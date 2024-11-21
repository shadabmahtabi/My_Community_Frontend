import React from "react";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="max-w-7xl mx-auto md:px-6 md:py-4 px-2">
      <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
      <div className="flex gap-4 flex-wrap mt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-2 md:px-4 md:py-2 text-xs md:text-base rounded ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
