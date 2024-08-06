import { createStore,applyMiddleware, combineReducers } from 'redux';
import imageReducer from './reducers/imageReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  images: imageReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
);

export default store;
