import React from "react";

const Boxes = ({ boxes, onHighlight, selectedColour }) => {
  return (
    <div className="GameContainer">
      {boxes.map(({ id, highlight, colour }) => (
        <div
          key={id}
          onClick={() => onHighlight(id, selectedColour)}
          className={highlight ? colour : "boxOff"}
        ></div>
      ))}
    </div>
  );
};

export default Boxes;
