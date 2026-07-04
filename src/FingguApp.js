import React from 'react';
import FingguCodeEditor from './components/FingguCodeEditor';
import FingguFeedbackPanel from './components/FingguFeedbackPanel';

class FingguApp extends React.Component {
  render() {
    return (
      <div className='finggu-app'>
        <FingguCodeEditor />
        <FingguFeedbackPanel />
      </div>
    );
  }
}

export default FingguApp;