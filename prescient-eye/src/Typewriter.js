import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, index));
      setIndex(index + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [index, text, delay]);

  return <span>{displayText}</span>;
};

export default Typewriter;
