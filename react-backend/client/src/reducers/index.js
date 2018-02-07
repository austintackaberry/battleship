import { combineReducers } from 'redux';
import currentUser from './currentUser';
import shipGrid from './shipGrid';
import shipsLeft from './shipsLeft';
import shotGrid from './shotGrid';
import winner from './winner';

const rootReducer = combineReducers({winner, currentUser, shipGrid, shipsLeft, shotGrid});

export default rootReducer;
