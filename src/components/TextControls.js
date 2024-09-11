import React from 'react';
import { useDispatch } from 'react-redux';
import { addText, updateText } from '../actions';

const TextControls = () => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState('');
  const [font, setFont] = React.useState('Arial');
  const [size, setSize] = React.useState('16px');
  const [bold, setBold] = React.useState(false);
  const [italic, setItalic] = React.useState(false);

  const handleAddText = () => {
    const id = Date.now(); // Simple unique ID
    dispatch(addText({ id, content, font, size, bold, italic, x: 0, y: 0 }));
  };

  return (
    <div className="controls">
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter text" />
      <select value={font} onChange={(e) => setFont(e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select>
      <input type="number" value={size.replace('px', '')} onChange={(e) => setSize(e.target.value + 'px')} />
      <button onClick={() => setBold(!bold)}>{bold ? 'Unbold' : 'Bold'}</button>
      <button onClick={() => setItalic(!italic)}>{italic ? 'Unitalicize' : 'Italicize'}</button>
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default TextControls;
