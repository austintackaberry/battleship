
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

export function initializeShipsLeft() {
  return {
      type: 'INITIALIZE_SHIPS_LEFT'
  }
}

export function randomlyGenerateShipLocations(shipsLeft) {
  return {
      type: 'RANDOMLY_GENERATE_SHIP_LOCATIONS',
      shipsLeft
  }
}
