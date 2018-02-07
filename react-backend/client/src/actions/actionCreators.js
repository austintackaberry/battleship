
export function initializeShipGrid() {
  return {
      type: 'INITIALIZE_SHIP_GRID'
  }
}

export function initializeShotGrid() {
  return {
      type: 'INITIALIZE_SHOT_GRID'
  }
}

export function randomlyGenerateShipLocations(shipsLeft) {
  return {
      type: 'RANDOMLY_GENERATE_SHIP_LOCATIONS',
      shipsLeft
  }
}

export function checkForWinner(shipGrid) {
  return {
      type: 'CHECK_FOR_WINNER',
      shipGrid
  }
}

export function onShot(rowIndex, colIndex, currentUser, shipGrid, shotGrid) {
  return {
      type: 'ON_SHOT',
      rowIndex,
      colIndex,
      currentUser,
      shipGrid,
      shotGrid
  }
}
