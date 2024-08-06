import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageList from './components/ImageList';
import './styles.css';

const App = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (image) => {
    const newImage = {
      imageSrc: image.image,
      filter: image.filter,
      fileName: `image-${images.length + 1}.jpg`,
      uploadDate: new Date(),
    };
    setImages([...images, newImage]);
  };

  return (
    <div className="app">
      <h1>Image Upload & Filter App</h1>
      <ImageUpload onUpload={handleUpload} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
