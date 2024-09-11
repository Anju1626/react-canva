import { ActionTypes, includeAction } from 'redux-undo';

const initialState = {
  items: [],
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'UPDATE_TEXT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    default:
      return state;
  }
};

export default textReducer;
