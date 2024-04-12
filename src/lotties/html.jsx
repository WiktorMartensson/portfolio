import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation-html.json'


export default function Html() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={60}
        width={60}
      />
    </div>
  );
}