import React from 'react';

const ImageDetails = ({ image }) => {
  const { imageSrc, filter, fileName, uploadDate } = image;

  return (
    <div className="image-details">
      <img src={imageSrc} alt={fileName} style={{ filter }} />
      <p>File Name: {fileName}</p>
      <p>Upload Date: {new Date(uploadDate).toLocaleString()}</p>
      <p>Filter: {filter || 'None'}</p>
    </div>
  );
};

export default ImageDetails;
