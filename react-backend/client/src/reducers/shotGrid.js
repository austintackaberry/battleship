
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
    default:
      return state;
  }
}

export default shotGrid;
