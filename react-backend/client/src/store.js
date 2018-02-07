import { createStore } from 'redux';

import rootReducer from './reducers/index';

const defaultState = {
  shipGrid: {user1: null, user2: null},
  shotGrid: {user1: null, user2: null},
  currentUser: "user1",
  shipsLeft: {user1: null, user2: null},
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
