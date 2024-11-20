import React from "react";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
      <div className="flex gap-4 mt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
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
