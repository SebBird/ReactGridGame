const returnGridValues = ({ gridRowSize, currentSquare }) => {
  let topLeft = 0;
  let topRight = gridRowSize - 1;
  let bottomLeft = gridRowSize ** 2 - gridRowSize;
  let bottomRight = gridRowSize ** 2 - 1;

  //Check to see if corner square
  if (currentSquare === topLeft) return [currentSquare + 1, gridRowSize];
  if (currentSquare === topRight)
    return [gridRowSize - 2, gridRowSize + gridRowSize - 1];
  if (currentSquare === bottomLeft)
    return [bottomLeft - gridRowSize, bottomLeft + 1];
  if (currentSquare === bottomRight)
    return [bottomRight - gridRowSize, bottomRight - 1];

  //Check to see if top row and not corner

  if (0 < currentSquare && currentSquare < topRight)
    return [currentSquare - 1, currentSquare + 1, currentSquare + gridRowSize];

  //Check to see if left column and not corner
  if (
    topRight < currentSquare &&
    currentSquare < bottomLeft &&
    currentSquare % gridRowSize === 0
  )
    return [
      currentSquare - gridRowSize,
      currentSquare + 1,
      currentSquare + gridRowSize,
    ];

  //Check to see if right column and not corner
  if (
    topRight < currentSquare &&
    currentSquare < bottomRight &&
    (currentSquare - (gridRowSize - 1)) % gridRowSize === 0
  )
    return [
      currentSquare - gridRowSize,
      currentSquare - 1,
      currentSquare + gridRowSize,
    ];

  //Check to see if bottom row and not corner
  if (bottomLeft < currentSquare && currentSquare < bottomRight)
    return [currentSquare - gridRowSize, currentSquare - 1, currentSquare + 1];

  //If none of these
  return [
    currentSquare - gridRowSize,
    currentSquare - 1,
    currentSquare + 1,
    currentSquare + gridRowSize,
  ];
};

export function getGrid(gridRowSize) {
  const gridSize = gridRowSize * gridRowSize;
  let grid = [];
  for (let i = 0; i < gridSize; i++) {
    const current = {
      gridRowSize,
      currentSquare: i,
    };

    grid[i] = returnGridValues(current);
  }
  return grid;
}
