import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImagePreview from './ImagePreview';
import ImageFilters from './ImageFilters';
import { uploadImage } from '../store/actions/imageActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageUpload = () => {

  const FILTER_TYPES = {
    GRAYSCALE: 'grayscale(100%)',
    NONE: 'none',
    SEPIA: 'sepia(100%)',
  };
  
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [filter, setFilter] = useState(FILTER_TYPES.NONE);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFilterChange = (newFilter) => {
    if (Object.values(FILTER_TYPES).includes(newFilter)) {
      setFilter(newFilter);
    } else {
      console.error("Invalid filter type");
    }
  };

  const handleUpload = () => {
    if (selectedFile) {

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
  
      img.src = URL.createObjectURL(selectedFile);
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
  
        
        ctx.filter = filter;
  
        ctx.drawImage(img, 0, 0);
  
        canvas.toBlob((blob) => {
          const filteredFile = new File([blob], selectedFile.name, {
            type: selectedFile.type,
            lastModified: Date.now(),
          });
  
          dispatch(uploadImage(filteredFile, filter))
            .then(() => toast.success('Image uploaded successfully!'))
            .catch(() => toast.error('Failed to upload image.'));
          setSelectedFile(null);
          setFilter(FILTER_TYPES.NONE);
        }, selectedFile.type);
      };
    }
  };
  

  return (
    <div className="image-upload">
      <input type="file" onChange={handleImageChange} />
      {selectedFile && (
        <>
          <ImagePreview image={URL.createObjectURL(selectedFile)} filter={filter} />
          <ImageFilters onFilterChange={handleFilterChange} />
          <button onClick={handleUpload}>Upload</button>
        </>
      )}
      <ToastContainer /> 
    </div>
  );
};

export default ImageUpload;
