import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = (props) => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };


  return (
    <div style={{height: `${props.height}px`}}>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
}

export default QuillEditor;
