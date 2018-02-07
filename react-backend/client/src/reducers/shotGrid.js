
function shotGrid(state = [], action) {
  switch (action.type) {
    case 'INITIALIZE_SHOT_GRID': {
      let newState = Object.assign({}, state);
      for (let user in state) {
        let grid = [];
        for (let i = 0; i < 10; i++) {
          let row = [];
          for (let j = 0; j < 10; j++) {
            row.push({shot: false});
          }
          grid.push(row)
        }
        newState[user] = grid;
      }
      return newState;
    }
    case 'ON_SHOT': {
      let newState = Object.assign({}, state);
      const rowIndex = action.rowIndex;
      const colIndex = action.colIndex;
      const currentUser = action.currentUser;
      const shipGrid = action.shipGrid;
      let opponent = "user1";
      if (currentUser === "user1") {
        opponent = "user2";
      }
      if (shipGrid[opponent][rowIndex][colIndex].ship) {
        if (shipGrid[opponent][rowIndex][colIndex].ship.hit) {
          newState[currentUser][rowIndex][colIndex].shot = {hit:true};
        }
      }
      else {
        newState[currentUser][rowIndex][colIndex].shot = {hit:false};
      }
      return newState;
    }
    default:
      return state;
  }
}

export default shotGrid;
