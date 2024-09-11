import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateText } from '../actions';

const TextElement = ({ text, onDrag }) => {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: text.x, y: text.y });

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - e.target.offsetWidth / 2;
      const newY = e.clientY - e.target.offsetHeight / 2;
      setPosition({ x: newX, y: newY });
      onDrag(text.id, newX, newY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        fontSize: text.size,
        fontFamily: text.font,
        fontWeight: text.bold ? 'bold' : 'normal',
        fontStyle: text.italic ? 'italic' : 'normal',
        cursor: 'move'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {text.content}
    </div>
  );
};

export default TextElement;
