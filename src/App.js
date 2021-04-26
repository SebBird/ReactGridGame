import React, { useState } from "react";
import Boxes from "./Components/Boxes";
import ColourPicker from "./Components/ColourPicker";
import "./App.css";
import ResetBtn from "./Components/Reset";
import GridSelect from "./Components/GridSelect";

const App = () => {
  const grids = [
    [
      [1, 3],
      [0, 2, 4],
      [1, 5],
      [0, 4, 6],
      [1, 3, 5, 7],
      [2, 4, 8],
      [3, 7],
      [4, 6, 8],
      [5, 7],
    ],
    [
      [1, 4],
      [0, 2, 5],
      [1, 3, 6],
      [2, 7],
      [0, 5, 8],
      [1, 4, 6, 9],
      [2, 5, 7, 10],
      [3, 6, 11],
      [4, 9, 12],
      [5, 8, 10, 13],
      [6, 9, 11, 14],
      [7, 10, 15],
      [8, 13],
      [12, 9, 14],
      [10, 13, 15],
      [11, 14],
    ],
    [
      [1, 5],
      [0, 2, 6],
      [1, 3, 7],
      [2, 4, 8],
      [3, 9],
      [0, 6, 10],
      [1, 5, 7, 11],
      [2, 6, 8, 12],
      [3, 7, 9, 13],
      [4, 8, 14],
      [5, 11, 15],
      [6, 10, 12, 16],
      [7, 11, 13, 17],
      [8, 12, 14, 18],
      [9, 13, 19],
      [10, 16, 20],
      [11, 15, 17, 21],
      [12, 16, 18, 22],
      [13, 17, 19, 23],
      [14, 18, 24],
      [15, 21],
      [16, 20, 22],
      [17, 21, 23],
      [18, 22, 24],
      [19, 23],
    ],
  ];

  const [boxes, updateBoxes] = useState([
    { id: 0, highlight: false, colour: "yellow", numbers: [1, 3] },
    { id: 1, highlight: false, colour: "yellow", numbers: [0, 2, 4] },
    { id: 2, highlight: false, colour: "yellow", numbers: [1, 5] },
    { id: 3, highlight: false, colour: "yellow", numbers: [0, 4, 6] },
    { id: 4, highlight: false, colour: "yellow", numbers: [1, 3, 5, 7] },
    { id: 5, highlight: false, colour: "yellow", numbers: [2, 4, 8] },
    { id: 6, highlight: false, colour: "yellow", numbers: [3, 7] },
    { id: 7, highlight: false, colour: "yellow", numbers: [4, 6, 8] },
    { id: 8, highlight: false, colour: "yellow", numbers: [5, 7] },
  ]);

  const [selectedColour, updateSelectedColour] = useState("yellow");
  const [moveCount, updateMoveCount] = useState(0);
  const [gridSize, updateGridSize] = useState(3);

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

    if (newGrid === 5 && operator === "+") return;
    if (newGrid === 3 && operator === "-") return;

    newGrid = operator === "+" ? newGrid + 1 : newGrid - 1;
    updateGridSize(newGrid);
    handleReset();
    let resetMoves = moveCount;
    resetMoves = 0;
    updateMoveCount(resetMoves);
    let newBoxes = [];
    let index = newGrid - 3;

    for (let i = 0; i < grids[index].length; i++) {
      newBoxes.push({
        id: i,
        highlight: false,
        colour: "yellow",
        numbers: grids[index][i],
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
    Export grid variable to seperate module, declutter
    Make fully responsive
    Styled Components
    Randomly generate a pattern which the user has to match
    Add victory message for matching pattern

    Future:
    Link to back-end services and log individual scores
    Varying difficulties
    Time trial setting

*/
