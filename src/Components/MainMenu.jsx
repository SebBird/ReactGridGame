import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.button`
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 100px;
  margin: 1rem 0;
  background: gold;
  box-shadow: 0 3px 0px 0px goldenrod;
  transition: all 0.1s;
  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;

const MainMenu = ({ onDifficultySelect }) => {
  return (
    <Main>
      <p>Welcome!</p>
      <p>Select puzzle difficulty</p>
      <MenuButton onClick={() => onDifficultySelect(3)}>
        3x3 (Easiest)
      </MenuButton>
      <MenuButton onClick={() => onDifficultySelect(4)}>4x4</MenuButton>
      <MenuButton onClick={() => onDifficultySelect(5)}>5x5</MenuButton>
      <MenuButton onClick={() => onDifficultySelect(6)}>6x6</MenuButton>
      <MenuButton onClick={() => onDifficultySelect(7)}>7x7</MenuButton>
      <MenuButton onClick={() => onDifficultySelect(8)}>8x8</MenuButton>
      <MenuButton onClick={() => onDifficultySelect(9)}>
        9x9 (Hardest)
      </MenuButton>
    </Main>
  );
};

export default MainMenu;
