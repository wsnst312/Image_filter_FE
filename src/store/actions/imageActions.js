import axios from 'axios';

export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';

export const fetchImages = () => async (dispatch) => {
  dispatch({ type: FETCH_IMAGES_REQUEST });
  try {
    const response = await axios.get('http://localhost:8080/api/file/list');
    console.log('API Response:', response.data)
    dispatch({ type: FETCH_IMAGES_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: FETCH_IMAGES_FAILURE, payload: error.message });
  }
};

export const uploadImage = (file, filter) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filter', filter);

    const response = await axios.post('http://localhost:8080/api/file/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: response.data });
    dispatch(fetchImages()); 
    return Promise.resolve(); 
  } catch (error) {
    console.error('Error uploading image:', error);
    return Promise.reject(); 
  }
};
