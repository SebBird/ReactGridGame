import React from "react";
// import styled from "styled-components";

const Boxes = ({ boxes, gridSize, onHighlight, selectedColour }) => {
  // const Box = styled.div`
  //   width: ${100 / gridSize};
  //   height: ${100 / gridSize};
  //   margin: ${100 / gridSize};
  // `;

  let classes = "";
  classes +=
    gridSize === 3 ? " three" : (classes += gridSize === 4 ? " four" : " five");

  console.log(gridSize, classes);

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
