// import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../reducers/Post/posts.reducer';
// import postReducer from '../reducers/Post/posts.reducer';
// import authReducer from '../reducers/AuthUser/authUser.reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const rootReducer = combineReducers({
//   posts: postReducer,
//   user: userReducer,
//   auth: authReducer,
// });

// const composeEnhancers = composeWithDevTools({
//   traceLimit: 20,
//   trace: true,
// });
// let middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middlewares = [...middlewares, logger];
// }
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
// export default store;
// window.store = store;
