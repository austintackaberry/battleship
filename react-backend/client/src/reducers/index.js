import { combineReducers } from 'redux';
import currentUser from './currentUser';
import shipGrid from './shipGrid';
import shipsLeft from './shipsLeft';
import shotGrid from './shotGrid';

const rootReducer = combineReducers({currentUser, shipGrid, shipsLeft, shotGrid});

export default rootReducer;
