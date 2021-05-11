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
  ${({ gameWon }) =>
    gameWon
      ? `
  filter: blur(4px) grayscale(50%) ;
`
      : null}
`;

const Victory = styled.p`
  user-select: none;
  height: 500px;
  width: 500px;
  line-height: 500px;
  text-align: center;
  margin: 0;
  z-index: 9999;
  font-size: 1.2rem;
  font-weight: 800;
  position: absolute;
  border-radius: 10px;
  display: none;
  @media (max-width: 1280px) {
    height: 220px;
    width: 220px;
    line-height: 220px;
  }
  ${({ gameWon }) =>
    gameWon
      ? `
    display: inline;
  `
      : null}
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
      <Paragraph>Your grid:</Paragraph>
      <div className="GameContainer">
        <Victory gameWon={gameWon}>You won in {moveCount} moves!</Victory>
        {boxes.map(({ id, highlight, colour }) => (
          <Box
            gameWon={gameWon}
            gridSize={gridSize}
            key={id}
            onClick={() => onHighlight(id, selectedColour)}
            className={highlight ? colour : "boxOff"}
          />
        ))}
      </div>
    </div>
  );
};

export default Boxes;
