import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts && texts.length > 0) {
      const currentText = texts[currentIndex];
      if (currentText) {
      
        let charIndex = 0;
        let newDisplayText = ''; // Local variable to accumulate characters
        const interval = setInterval(() => {
          if (charIndex < currentText.length) {
            newDisplayText += currentText[charIndex]; // Accumulate characters
        
            setDisplayText(newDisplayText);
            charIndex++;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              setDisplayText(''); // Clear displayText before moving to the next text
              setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 1000); // Wait for 1 second before moving to the next text
          }
        }, 100); // Adjust typing speed here
        return () => clearInterval(interval);
      }
    }
  }, [texts, currentIndex]);

  

  return <h5 className="text-light typewriter">{displayText}</h5>;
};

export default Typewriter;
