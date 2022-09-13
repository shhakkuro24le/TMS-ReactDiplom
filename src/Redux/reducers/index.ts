

import { combineReducers } from "@reduxjs/toolkit";

import postsReducer from './Post';
import userReducer from './User';
import filterReducer from "./Filter/filter.reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    filter: filterReducer,
});

export default rootReducer;