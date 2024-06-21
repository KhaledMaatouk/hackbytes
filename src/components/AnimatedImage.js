// src/components/AnimatedImage.js

import React from 'react';
import './AnimatedImage.css'; // Import the CSS file

const AnimatedImage = ({ src, alt }) => {
  return (
    <div className="video-container">
      <video className="responsive-video" autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AnimatedImage;
