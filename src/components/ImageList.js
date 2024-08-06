import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages } from '../store/actions/imageActions';

const ImageList = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const imageList = Array.isArray(images) ? images : [];

  return (
    <div>
      <h2>Uploaded Images</h2>
      <ul>
        {imageList.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.name} width="100" />
            <p>Name: {image.filename}</p>
            <p>Upload Date: {new Date(image.createdAt).toLocaleString()}</p>
            <p>Filter: {image.filter}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
