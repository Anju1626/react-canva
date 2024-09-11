import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

const UndoRedoControls = () => {
  const dispatch = useDispatch();

  return (
    <div className="undo-redo-controls">
      <button onClick={() => dispatch(UndoActionCreators.undo())}>Undo</button>
      <button onClick={() => dispatch(UndoActionCreators.redo())}>Redo</button>
    </div>
  );
};

export default UndoRedoControls;
