
function currentUser(state = [], action) {
  switch (action.type) {
    case 'CHANGE_USER': {
      if (state === "user1") {
        return "user2"
      }
      if (state === "user2") {
        return "user1"
      }
      return state;
    }
    default:
      return state;
  }
}

export default currentUser;
