import React from "react";

const ColourPicker = ({ currentColour, onColourChange }) => (
  <div className="selector">
    <div
      className={currentColour === "yellow" ? "yellowSelect" : "noSelect"}
      onClick={() => onColourChange(currentColour, "yellow")}
    />
    <div
      className={currentColour === "blue" ? "blueSelect" : "noSelect"}
      onClick={() => onColourChange(currentColour, "blue")}
    />
  </div>
);
export default ColourPicker;
