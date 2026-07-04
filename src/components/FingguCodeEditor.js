import React, { useState } from 'react';
import { finggu_fetchData } from '../utils/fingguApi';

const FingguCodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    finggu_fetchData(code);
  };

  return (
    <textarea
      className='finggu-code-editor'
      value={code}
      onChange={handleCodeChange}
    />
  );
};

export default FingguCodeEditor;