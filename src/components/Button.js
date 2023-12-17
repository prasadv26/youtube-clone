import React from "react";

const Button = ({ title }) => {
  return (
    <>
      <button className="bg-gray-300 rounded-md p-2 px-3 m-2 hover:bg-gray-200">
        {title}
      </button>
    </>
  );
};

export default Button;
