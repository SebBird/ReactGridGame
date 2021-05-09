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

const TargetBoxes = ({ targetBoxes, gridSize, gameWon }) => {
  return (
    <div>
      {gameWon ? null : (
        <>
          <Paragraph>Match the pattern below!</Paragraph>
          <div className="GameContainer">
            {targetBoxes.map(({ id, highlight, colour }) => (
              <Box
                gridSize={gridSize}
                key={id + "target"}
                className={highlight ? colour : "boxOff"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TargetBoxes;
