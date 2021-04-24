import React, { useState } from "react";
import Boxes from "./Components/Boxes";
import ColourPicker from "./Components/ColourPicker";
import "./App.css";

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
    let newBoxes = [...boxes];
    const boxIndex = id - 1;
    newBoxes[boxIndex].highlight = !newBoxes[boxIndex].highlight;
    newBoxes[boxIndex].colour = selectedColour;
    newBoxes = changeSurrounding(newBoxes, boxIndex, selectedColour);
    updateBoxes(newBoxes);
  };

  return (
    <div id="main">
      <h1>Yellow &#38; Blue</h1>
      <ColourPicker
        currentColour={selectedColour}
        onColourChange={handleColourChange}
      />
      <Boxes
        boxes={boxes}
        onHighlight={handleHighlight}
        selectedColour={selectedColour}
      />
    </div>
  );
};

/*  TO DO

    ASAP:
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
