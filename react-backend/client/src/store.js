import { createStore } from 'redux';

import rootReducer from './reducers/index';

const defaultState = {
  shipGrid: {user1: null, user2: null},
  shotGrid: {user1: null, user2: null},
  currentUser: "user1",
  winner: null,
  shipsLeft: {
    user1: [
      {
        type: "carrier",
        size: 5,
        sunk: false
      },
      {
        type: "battleship",
        size: 4,
        sunk: false
      },
      {
        type: "cruiser",
        size: 3,
        sunk: false
      },
      {
        type: "submarine",
        size: 3,
        sunk: false
      },
      {
        type: "destroyer",
        size: 2,
        sunk: false
      },
    ],
    user2: [
      {
        type: "carrier",
        size: 5,
        sunk: false
      },
      {
        type: "battleship",
        size: 4,
        sunk: false
      },
      {
        type: "cruiser",
        size: 3,
        sunk: false
      },
      {
        type: "submarine",
        size: 3,
        sunk: false
      },
      {
        type: "destroyer",
        size: 2,
        sunk: false
      },
    ]
  }
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
