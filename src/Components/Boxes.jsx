import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  padding-top: 20px;
  text-align: center;
`;

const Box = styled.div`
  width: ${(props) => 85 / props.gridSize}%;
  height: ${(props) => 85 / props.gridSize}%;
  @media (max-width: 1280px) {
    width: ${(props) => 75 / props.gridSize}%;
    height: ${(props) => 75 / props.gridSize}%;
  }
`;

const Victory = styled.p`
  margin: 0;
  padding: 275px 0;
  font-size: 40px;
  font-weight: 800;
`;

const Boxes = ({
  boxes,
  gridSize,
  onHighlight,
  selectedColour,
  gameWon,
  moveCount,
}) => {
  return (
    <div>
      {gameWon ? (
        <Victory> You won in {moveCount} moves!</Victory>
      ) : (
        <>
          <Paragraph>Your grid:</Paragraph>
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
        </>
      )}
    </div>
  );
};

export default Boxes;
