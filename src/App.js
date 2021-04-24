import React, { useState } from "react";
import Boxes from "./Components/Boxes";
import "./App.css";
import ColourPicker from "./Components/ColourPicker";

const App = () => {
  const [boxes, updateBoxes] = useState([
    { id: 1, highlight: false, colour: "yellow" },
    { id: 2, highlight: false, colour: "yellow" },
    { id: 3, highlight: false, colour: "yellow" },
    { id: 4, highlight: false, colour: "yellow" },
    { id: 5, highlight: false, colour: "yellow" },
    { id: 6, highlight: false, colour: "yellow" },
    { id: 7, highlight: false, colour: "yellow" },
    { id: 8, highlight: false, colour: "yellow" },
    { id: 9, highlight: false, colour: "yellow" },
  ]);

  const [selectedColour, updateSelectedColour] = useState("yellow");

  const handleHighlight = (id, selectedColour) => {
    let newBoxes = [...boxes];
    const boxIndex = id - 1;
    newBoxes[boxIndex].highlight = !newBoxes[boxIndex].highlight;
    newBoxes[boxIndex].colour = selectedColour;
    newBoxes = changeSurrounding(newBoxes, boxIndex, selectedColour);
    updateBoxes(newBoxes);
  };

  const handleColourChange = (currentColour, selected) => {
    let newColour = selected;
    if (currentColour === newColour) return;
    updateSelectedColour(newColour);
  };

  const changeSurrounding = (newBoxes, index, selectedColour) => {
    console.log(newBoxes, index, selectedColour);

    switch (index) {
      case 0:
        newBoxes[1].highlight = !newBoxes[1].highlight;
        newBoxes[3].highlight = !newBoxes[3].highlight;
        newBoxes[1].colour = selectedColour;
        newBoxes[3].colour = selectedColour;
        break;

      case 1:
        newBoxes[0].highlight = !newBoxes[0].highlight;
        newBoxes[2].highlight = !newBoxes[2].highlight;
        newBoxes[4].highlight = !newBoxes[4].highlight;
        newBoxes[0].colour = selectedColour;
        newBoxes[2].colour = selectedColour;
        newBoxes[4].colour = selectedColour;
        break;

      case 2:
        newBoxes[1].highlight = !newBoxes[1].highlight;
        newBoxes[5].highlight = !newBoxes[5].highlight;
        newBoxes[1].colour = selectedColour;
        newBoxes[5].colour = selectedColour;
        break;

      case 3:
        newBoxes[0].highlight = !newBoxes[0].highlight;
        newBoxes[4].highlight = !newBoxes[4].highlight;
        newBoxes[6].highlight = !newBoxes[6].highlight;
        newBoxes[0].colour = selectedColour;
        newBoxes[4].colour = selectedColour;
        newBoxes[6].colour = selectedColour;
        break;

      case 4:
        newBoxes[1].highlight = !newBoxes[1].highlight;
        newBoxes[3].highlight = !newBoxes[3].highlight;
        newBoxes[5].highlight = !newBoxes[5].highlight;
        newBoxes[7].highlight = !newBoxes[7].highlight;
        newBoxes[1].colour = selectedColour;
        newBoxes[3].colour = selectedColour;
        newBoxes[5].colour = selectedColour;
        newBoxes[7].colour = selectedColour;
        break;

      case 5:
        newBoxes[2].highlight = !newBoxes[2].highlight;
        newBoxes[4].highlight = !newBoxes[4].highlight;
        newBoxes[8].highlight = !newBoxes[8].highlight;
        newBoxes[2].colour = selectedColour;
        newBoxes[4].colour = selectedColour;
        newBoxes[8].colour = selectedColour;
        break;

      case 6:
        newBoxes[3].highlight = !newBoxes[3].highlight;
        newBoxes[7].highlight = !newBoxes[7].highlight;
        newBoxes[3].colour = selectedColour;
        newBoxes[7].colour = selectedColour;
        break;

      case 7:
        newBoxes[4].highlight = !newBoxes[4].highlight;
        newBoxes[6].highlight = !newBoxes[6].highlight;
        newBoxes[8].highlight = !newBoxes[8].highlight;
        newBoxes[4].colour = selectedColour;
        newBoxes[6].colour = selectedColour;
        newBoxes[8].colour = selectedColour;
        break;

      case 8:
        newBoxes[5].highlight = !newBoxes[5].highlight;
        newBoxes[7].highlight = !newBoxes[7].highlight;
        newBoxes[5].colour = selectedColour;
        newBoxes[7].colour = selectedColour;
        break;

      default:
        break;
    }
    return newBoxes;
  };

  return (
    <div id="main">
      <h1>Blue &#38; Yellow</h1>
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
    Randomly generate a pattern which the user has to match
    Add counter for amount of moves
    Add victory message for matching pattern

    Future:
    Link to back-end services and log individual scores
    Varying difficulties
    Time trial setting

*/

export default App;
