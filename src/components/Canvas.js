import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateText } from '../actions';
import TextElement from './TextElement';

const Canvas = () => {
  const dispatch = useDispatch();
  const texts = useSelector((state) => state.text.present.items);

  const handleDrag = (id, x, y) => {
    dispatch(updateText({ id, x, y }));
  };

  return (
    <div className="canvas"  style={{ position: 'relative', width: '800px', height: '600px', border: '1px solid black' }}>
      {texts.map((text) => (
        <TextElement
          key={text.id}
          text={text}
          onDrag={handleDrag}
        />
      ))}
    </div>
  );
};

export default Canvas;
