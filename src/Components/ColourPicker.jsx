import React from "react";

const ColourPicker = ({ currentColour, onColourChange }) => {
  return (
    <div className="selector">
      <div
        className={currentColour === "yellow" ? "yellowSelect" : "noSelect"}
        onClick={() => onColourChange(currentColour, "yellow")}
      ></div>
      <div
        className={currentColour === "blue" ? "blueSelect" : "noSelect"}
        onClick={() => onColourChange(currentColour, "blue")}
      ></div>
    </div>
  );
};

export default ColourPicker;
