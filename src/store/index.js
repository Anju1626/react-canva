import { createStore, combineReducers } from 'redux';
import { includeAction } from 'redux-undo';
import undoable from 'redux-undo';
import textReducer from './textReducer';

// Wrap the textReducer with undoable
const undoableTextReducer = undoable(textReducer, {
  filter: includeAction(['ADD_TEXT', 'UPDATE_TEXT'])
});

const rootReducer = combineReducers({
  text: undoableTextReducer
});

export const store = createStore(rootReducer);
