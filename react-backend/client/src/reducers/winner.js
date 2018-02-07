
function checkForWinner(state = [], action) {
  switch (action.type) {
    case 'CHECK_FOR_WINNER': {
      const shipGrid = action.shipGrid;
      for (let user in shipGrid) {
        let opponent = "user1";
        if (user === "user1") {opponent = "user2"}
        const thisUserIsALoser = !shipGrid[user].some((row, rowIndex) => {
          return row.some((element, colIndex) => {
            return element.ship && !element.ship.hit
          });
        });
        if (thisUserIsALoser) {
          return opponent;
        }
      }
      return state;
    }
    default:
      return state;
  }
}

export default checkForWinner;
