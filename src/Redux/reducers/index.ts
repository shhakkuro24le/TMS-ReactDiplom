

import { combineReducers } from "@reduxjs/toolkit";

import postsReducer from './Post';
import userReducer from './User';

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
});

export default rootReducer;