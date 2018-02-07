
function shipsLeft(state = [], action) {
  switch (action.type) {
    case 'INITIALIZE_SHIPS_LEFT': {
      let newState = Object.assign({}, state);
      for (let user in state) {
        newState[user] = {
          carrier: {
            type: "carrier",
            size: 5,
            sunk: false
          },
          battleship: {
            type: "battleship",
            size: 4,
            sunk: false
          },
          cruiser: {
            type: "cruiser",
            size: 3,
            sunk: false
          },
          submarine: {
            type: "submarine",
            size: 2,
            sunk: false
          },
          destroyer: {
            type: "destroyer",
            size: 1,
            sunk: false
          },
        }
      }
      return newState;
    }
    default:
      return state;
  }
}

export default shipsLeft;
