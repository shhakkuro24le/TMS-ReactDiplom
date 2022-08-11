import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/Post/posts.reducer';
import postReducer from '../reducers/Post/posts.reducer';
import authReducer from '../reducers/AuthUser/authUser.reducer';
const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
window.store = store;
