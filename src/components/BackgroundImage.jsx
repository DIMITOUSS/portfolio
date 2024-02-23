// BackgroundImage.js
import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    backgroundStyle:"initial",
    backgroundBlendMode: 'hard-light',
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default BackgroundImage;
