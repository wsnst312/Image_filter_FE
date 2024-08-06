import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
    UPLOAD_IMAGE_SUCCESS,
  } from '../actions/imageActions';
  
  const initialState = {
    images: [],
    loading: false,
    error: null,
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_IMAGES_SUCCESS:
        return { ...state, loading: false, images: action.payload };
      case FETCH_IMAGES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case UPLOAD_IMAGE_SUCCESS:
        return { ...state, images: [...state.images, action.payload] };
      default:
        return state;
    }
  };
  
  export default imageReducer;
  