// AutotypeHeading.tsx
import React, { useState, useEffect } from 'react';

interface AutotypeHeadingProps {
  text: string;
}

const AutotypeHeading: React.FC<AutotypeHeadingProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed here (lower value for faster typing)
    
    return () => clearInterval(interval);
  }, [4]);

  return (
    <h1 className="text-4xl font-bold text-gray-800">
      <span className="autotype">{displayText}</span>
    </h1>
  );
};

export default AutotypeHeading;
