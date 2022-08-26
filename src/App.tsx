/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import Router from './Pages/Router';
import { Provider } from 'react-redux';
import store from './Redux/store';

import Header from './Components/Header';

import SighIn from './Pages/SignIn/SigIn';
import Button from './Components/Button';
import Posts from './Pages/Posts';
import Registration from './Pages/Registration';
import Post from './Pages/Post';
import RessetPassword from './Components/RessetPassword';
import { UserModel } from './types/user.model';
import { Outlet } from 'react-router-dom';
import Main from './Components/Main';
import './firebase';
export const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>

    //   // {/* <Button title="change tehem" onClick={changeTheme}></Button> */}
    //   // <Header userInfo={undefined} />
    //   {/* <Posts posts={postsFromApi} />
    //   <Post
    //     title={postsFromApi[0].title}
    //     imageUrl={postsFromApi[0].imageUrl}
    //     text={postsFromApi[0].summary}
    //   />
    //   {/* <SighIn /> */}
    //   {/* <Registration /> */}
    //   <RessetPassword />
    // </div>
  );
};

export default App;
