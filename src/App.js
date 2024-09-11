import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Canvas from './components/Canvas';
import TextControls from './components/TextControls';
import UndoRedoControls from './components/UndoRedoControls';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Canvas />
        <TextControls />
        <UndoRedoControls />
      </div>
    </Provider>
  );
};

export default App;
