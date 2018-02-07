
function shipGrid(state = [], action) {
  switch (action.type) {
    case 'INITIALIZE_SHIP_GRID': {
      let newState = Object.assign({}, state);
      for (let user in state) {
        let grid = [];
        for (let i = 0; i < 10; i++) {
          let row = [];
          for (let j = 0; j < 10; j++) {
            row.push({ship: false});
          }
          grid.push(row)
        }
        newState[user] = grid;
      }
      return newState;
    }
    case 'RANDOMLY_GENERATE_SHIP_LOCATIONS' : {
      let newState = Object.assign({}, state);
      for (let user in state) {
        let shipOrientation;
        if (action.shipsLeft[user]) {
          action.shipsLeft[user].map((ship) => {
            shipOrientation = "horizontal";
            if (Math.random() < 0.5) {
              shipOrientation = "vertical";
            }
            let itFits = false;
            let rowIndex;
            let colIndex;
            const zeroToNArray = Array.apply(null, {length: ship.size}).map(Number.call, Number)
            do {
              rowIndex = Math.floor(Math.random()*10);
              colIndex = Math.floor(Math.random()*10);
              if (shipOrientation === "horizontal" && colIndex < 10 - ship.size) {
                itFits = !zeroToNArray.some((offset) => {
                  return newState[user][rowIndex][colIndex+offset].ship;
                })
              }
              if (shipOrientation === "vertical" && rowIndex < 10 - ship.size) {
                itFits = !zeroToNArray.some((offset) => {
                  return newState[user][rowIndex+offset][colIndex].ship;
                })
              }
            }
            while (!itFits)
            if (shipOrientation === "horizontal") {
              zeroToNArray.map((offset) => {
                newState[user][rowIndex][colIndex+offset].ship = {
                  type: ship.type,
                  hit: false
                };
              });
            }
            else {
              zeroToNArray.map((offset) => {
                newState[user][rowIndex+offset][colIndex].ship = {
                  type: ship.type,
                  hit: false
                };
              });
            }
          });
        }
      }
      return newState;
    }
    case 'ON_SHOT' : {
      let newState = Object.assign({}, state);
      const rowIndex = action.rowIndex;
      const colIndex = action.colIndex;
      const currentUser = action.currentUser;
      let opponent = "user1";
      if (currentUser === "user1") {
        opponent = "user2";
      }
      if (state[opponent][rowIndex][colIndex].ship) {
        newState[opponent][rowIndex][colIndex].ship.hit = true;
      }
      return newState;
    }
    default:
      return state;
  }
}

export default shipGrid;
