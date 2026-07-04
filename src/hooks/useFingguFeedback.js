import { useState, useEffect } from 'react';
import { finggu_fetchData } from '../utils/fingguApi';

const useFingguFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  const fetchFeedback = async (code) => {
    const newFeedback = await finggu_fetchData(code);
    setFeedback(newFeedback);
  };

  useEffect(() => {
    fetchFeedback('');
  }, []);

  return { feedback };
};

export { useFingguFeedback };