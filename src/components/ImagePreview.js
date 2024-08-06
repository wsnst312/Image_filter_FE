import React from 'react';

const ImagePreview = ({ image, filter }) => {
  return (
    <div className="image-preview">
      <img src={image} alt="Selected" style={{ filter: filter }} />
    </div>
  );
};

export default ImagePreview;
