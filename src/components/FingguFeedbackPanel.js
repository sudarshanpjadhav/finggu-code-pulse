import React from 'react';
import { useFingguFeedback } from '../hooks/useFingguFeedback';

const FingguFeedbackPanel = () => {
  const { feedback } = useFingguFeedback();

  return (
    <div className='finggu-feedback-panel'>
      {feedback.map((item, index) => (
        <div key={index} className='finggu-feedback-item'>
          {item}
        </div>
      ))}
    </div>
  );
};

export default FingguFeedbackPanel;