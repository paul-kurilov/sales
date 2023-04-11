import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import "../../../resources/assets/scss/main.scss"

const QuillEditor = (props) => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };


  return (
    <div  style={{height: `${props.height}px`}}>
      {/* className='tmpRQ' */}
      {/* <b>dsdsd</b>
      <b className='add'>adddddddddd</b>
      <p>ppppp1111111</p>
      <div><p>ppppp2222</p></div>
      <a className='link' href="#">link</a> */}
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
}

export default QuillEditor;
