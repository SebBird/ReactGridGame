import React, { useState } from "react";
import Boxes from "./Components/Boxes";
import ColourPicker from "./Components/ColourPicker";
import ResetBtn from "./Components/Reset";
import GridSelect from "./Components/GridSelect";
import { getGrid } from "./jsmodules/Grid";
import "./App.css";

const App = () => {
  const [gridSize, updateGridSize] = useState(3);

  const [grids, updateGrids] = useState(getGrid(gridSize));

  const [boxes, updateBoxes] = useState([
    { id: 0, highlight: false, colour: "yellow", numbers: grids[0] },
    { id: 1, highlight: false, colour: "yellow", numbers: grids[1] },
    { id: 2, highlight: false, colour: "yellow", numbers: grids[2] },
    { id: 3, highlight: false, colour: "yellow", numbers: grids[3] },
    { id: 4, highlight: false, colour: "yellow", numbers: grids[4] },
    { id: 5, highlight: false, colour: "yellow", numbers: grids[5] },
    { id: 6, highlight: false, colour: "yellow", numbers: grids[6] },
    { id: 7, highlight: false, colour: "yellow", numbers: grids[7] },
    { id: 8, highlight: false, colour: "yellow", numbers: grids[8] },
  ]);

  const [selectedColour, updateSelectedColour] = useState("yellow");

  const [moveCount, updateMoveCount] = useState(0);

  const handleColourChange = (currentColour, selected) => {
    const newColour = selected;
    if (currentColour !== newColour) updateSelectedColour(newColour);
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
  };

  const handleReset = () => {
    let newBoxes = [...boxes];
    newBoxes.forEach((box) => {
      box.highlight = false;
      box.colour = "yellow";
    });
    updateBoxes(newBoxes);
  };

  const handleGridChange = (operator) => {
    let newGrid = gridSize;
    if (newGrid === 12 && operator === "+") return;
    if (newGrid === 3 && operator === "-") return;

    newGrid = operator === "+" ? newGrid + 1 : newGrid - 1;
    updateGridSize(newGrid);
    handleReset();

    let newGridRow = getGrid(newGrid);
    updateGrids(newGridRow);

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
  };

  return (
    <div id="main">
      <h1>Yellow &#38; Blue</h1>
      <p>Moves: {moveCount}</p>
      <ColourPicker
        currentColour={selectedColour}
        onColourChange={handleColourChange}
      />
      <Boxes
        boxes={boxes}
        gridSize={gridSize}
        onHighlight={handleHighlight}
        selectedColour={selectedColour}
      />
      <ResetBtn onReset={handleReset} />
      <GridSelect onGridChange={handleGridChange} gridSize={gridSize} />
    </div>
  );
};

export default App;

/*  TO DO

    ASAP:
    Randomly generate a pattern which the user has to match
    Add victory message for matching pattern

    Future:
    Link to back-end services and log individual scores
    Varying difficulties
    Time trial setting

*/
