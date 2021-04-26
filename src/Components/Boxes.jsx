import React from "react";

const Boxes = ({ boxes, gridSize, onHighlight, selectedColour }) => {
  let classes = "";
  classes +=
    gridSize === 3 ? " three" : (classes += gridSize === 4 ? " four" : " five");

  return (
    <div className="GameContainer">
      {boxes.map(({ id, highlight, colour }) => (
        <div
          key={id}
          onClick={() => onHighlight(id, selectedColour)}
          className={highlight ? colour + classes : "boxOff" + classes}
        ></div>
      ))}
    </div>
  );
};

export default Boxes;
