import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonTitles = [
    "All",
    "Podcasts",
    "Mixes",
    "Mantras",
    "Cricket",
    "Stocks",
    "Entertainment",
    "Programming",
    "Bollywood",
    "History",
  ];
  return (
    <div className="flex overflow-x-hidden m-2">
      {buttonTitles.map((title, index) => (
        <Button key={index} title={title} />
      ))}
    </div>
  );
};

export default ButtonList;
