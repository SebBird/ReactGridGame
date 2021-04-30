import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => 85 / props.gridSize}%;
  height: ${(props) => 85 / props.gridSize}%;
  @media (max-width: 1280px) {
    width: ${(props) => 75 / props.gridSize}%;
    height: ${(props) => 75 / props.gridSize}%;
  }
`;

const Boxes = ({ boxes, gridSize, onHighlight, selectedColour }) => {
  return (
    <div className="GameContainer">
      {boxes.map(({ id, highlight, colour }) => (
        <Box
          gridSize={gridSize}
          key={id}
          onClick={() => onHighlight(id, selectedColour)}
          className={highlight ? colour : "boxOff"}
        />
      ))}
    </div>
  );
};

export default Boxes;
