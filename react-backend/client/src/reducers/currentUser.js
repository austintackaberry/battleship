
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
    case 'ON_SHOT': {
      console.log(state);
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
