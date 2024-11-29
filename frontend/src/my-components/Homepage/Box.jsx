import React from "react";

const Box = ({ id, label, path, activeBox, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(id, path)}
      className={`w-[40%] h-[100px] text-primary font-semibold shadow-lg flex items-center justify-center border-1 rounded cursor-pointer ${
        activeBox === id ? "bg-secondary" : "bg-white"
      }`}
    >
      <h1 className={activeBox === id ? "text-white" : ""}>{label}</h1>
    </div>
  );
};

export default Box;
