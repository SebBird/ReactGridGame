import React, { useState } from "react";
import Boxes from "./Components/Boxes";
import ColourPicker from "./Components/ColourPicker";
import "./App.css";
import ResetBtn from "./Components/Reset";
import GridSelect from "./Components/GridSelect";

const App = () => {
  const [boxes, updateBoxes] = useState([
    { id: 1, highlight: false, colour: "yellow", numbers: [1, 3] },
    { id: 2, highlight: false, colour: "yellow", numbers: [0, 2, 4] },
    { id: 3, highlight: false, colour: "yellow", numbers: [1, 5] },
    { id: 4, highlight: false, colour: "yellow", numbers: [0, 4, 6] },
    { id: 5, highlight: false, colour: "yellow", numbers: [1, 3, 5, 7] },
    { id: 6, highlight: false, colour: "yellow", numbers: [2, 4, 8] },
    { id: 7, highlight: false, colour: "yellow", numbers: [3, 7] },
    { id: 8, highlight: false, colour: "yellow", numbers: [4, 6, 8] },
    { id: 9, highlight: false, colour: "yellow", numbers: [5, 7] },
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
    const boxIndex = id - 1;
    newBoxes[boxIndex].highlight = !newBoxes[boxIndex].highlight;
    newBoxes[boxIndex].colour = selectedColour;
    newBoxes = changeSurrounding(newBoxes, boxIndex, selectedColour);
    updateBoxes(newBoxes);
  };

  const handleReset = () => {
    let newBoxes = [...boxes];
    newBoxes.forEach(box => {
      box.highlight = false;
      box.colour = "yellow";
    })
    updateBoxes(newBoxes);
  }

  const handleGridChange = () => {
    let newGrid = gridSize;
    newGrid++;
    updateGridSize(newGrid);
  }

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
        onHighlight={handleHighlight}
        selectedColour={selectedColour}
      />
      <ResetBtn onReset={handleReset}/>
      <GridSelect onGridChange={handleGridChange} gridSize={gridSize}/>
    </div>
  );
};

/*  TO DO

    ASAP:
    Add increment/decrement for grid button
    Implement changeGrid method, min 3x3, max 5x5
    Styled Components
    Randomly generate a pattern which the user has to match
    Add counter for amount of moves
    Add victory message for matching pattern

    Future:
    Link to back-end services and log individual scores
    Varying difficulties
    Time trial setting

*/

export default App;
