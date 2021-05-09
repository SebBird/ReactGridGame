import React, { useState } from "react";
import Boxes from "./Components/Boxes";
import TargetBoxes from "./Components/TargetBoxes";
import ColourPicker from "./Components/ColourPicker";
import ResetBtn from "./Components/Reset";
import MenuReturn from "./Components/MenuReturn";
import MainMenu from "./Components/MainMenu";
import { getGrid, populateBoxes } from "./jsmodules/Grid";
import levels from "./jsmodules/GridLevels";
import "./App.css";

const App = () => {
  const [gridSize, updateGridSize] = useState();

  const [boxes, updateBoxes] = useState(populateBoxes(gridSize));

  const [targetBoxes, updateTargetBoxes] = useState(boxes);

  const [selectedColour, updateSelectedColour] = useState("yellow");

  const [moveCount, updateMoveCount] = useState(0);

  const [gameStarted, updateGameStarted] = useState(false);

  const [gameWon, updateGameWon] = useState(false);

  const handleDifficultySelect = (difficulty) => {
    startGame();
    handleGridChange(difficulty);
  };

  const startGame = () => {
    updateGameWon(false);
    updateGameStarted(!gameStarted);
  };

  const handleColourChange = (currentColour, selected) => {
    const newColour = selected;
    if (currentColour !== newColour) updateSelectedColour(newColour);
  };

  const randomiseTargetBoxes = (difficulty) => {
    //Set the targetGrid to a random level based on grid size
    let newTargetBoxes =
      levels[difficulty][Math.floor(Math.random() * levels[difficulty].length)];
    updateTargetBoxes(newTargetBoxes);
  };

  const changeSurrounding = (newBoxes, index, selectedColour) => {
    newBoxes = changeGrid({
      numbers: newBoxes[index].numbers,
      newBoxes,
      selectedColour,
    });
    return newBoxes;
  };

  const changeGrid = ({ numbers, newBoxes, selectedColour }) => {
    numbers.forEach((number) => {
      newBoxes[number].highlight = !newBoxes[number].highlight;
      newBoxes[number].colour = selectedColour;
    });
    return newBoxes;
  };

  const handleHighlight = (id, selectedColour) => {
    let newCount = moveCount;
    newCount++;
    updateMoveCount(newCount);

    let newBoxes = [...boxes];
    const boxIndex = id;
    newBoxes[boxIndex].highlight = !newBoxes[boxIndex].highlight;
    newBoxes[boxIndex].colour = selectedColour;
    newBoxes = changeSurrounding(newBoxes, boxIndex, selectedColour);
    updateBoxes(newBoxes);
    checkMatch(newBoxes, targetBoxes);
  };

  const checkMatch = (currentBoxes, patternBoxes) => {
    for (let i = 0; i < currentBoxes.length; i++) {
      if (currentBoxes[i].highlight !== patternBoxes[i].highlight) return;
      if (
        currentBoxes[i].highlight === true &&
        patternBoxes[i].highlight === true
      ) {
        if (currentBoxes[i].colour !== patternBoxes[i].colour) return;
      }
    }
    updateGameWon(true);
  };

  const handleReset = () => {
    let newBoxes = [...boxes];
    newBoxes.forEach((box) => {
      box.highlight = false;
      box.colour = "yellow";
    });
    updateBoxes(newBoxes);
  };

  const handleGridChange = (difficulty) => {
    updateGridSize(difficulty);
    handleReset();
    let newGridRow = getGrid(difficulty);
    let resetMoves = moveCount;
    resetMoves = 0;
    updateMoveCount(resetMoves);
    let newBoxes = [];

    for (let i = 0; i < newGridRow.length; i++) {
      newBoxes.push({
        id: i,
        highlight: false,
        colour: "yellow",
        numbers: newGridRow[i],
      });
    }
    updateBoxes(newBoxes);
    randomiseTargetBoxes(difficulty - 3);
  };

  return (
    <div id="main">
      <h1>Yellow &#38; Blue</h1>
      {!gameStarted ? (
        <MainMenu onDifficultySelect={handleDifficultySelect} />
      ) : (
        <>
          <p>Moves: {moveCount}</p>
          <ColourPicker
            currentColour={selectedColour}
            onColourChange={handleColourChange}
          />
          <div className="boxContainers">
            <Boxes
              boxes={boxes}
              gridSize={gridSize}
              onHighlight={handleHighlight}
              selectedColour={selectedColour}
              gameWon={gameWon}
              moveCount={moveCount}
            />
            <TargetBoxes
              targetBoxes={targetBoxes}
              gridSize={gridSize}
              gameWon={gameWon}
            />
          </div>
          <ResetBtn onReset={handleReset} />
          <MenuReturn onMenuReturn={startGame} />
        </>
      )}
    </div>
  );
};

export default App;

/*  TO DO

    ASAP:
    Fix sizing on victory message
    Allow level selection within grid size? 

    Future:
    Link to back-end services and log individual scores

*/
