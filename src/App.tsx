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

export const _store = {
  auth: true,
  posts: [
    {
      id: 826,
      title: 'Why we have the SLS',
      url: 'https://www.planetary.org/articles/why-we-have-the-sls',
      imageUrl:
        'https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x1600_crop_center-center_82_line/Artemis-1-SLS-rocket-at-dawn.jpg',
      newsSite: 'Planetary Society',
      summary:
        'The SLS rests on a secure foundation of political support, a consequence of the U.S. framework of representative democracy and discretionary funding.',
      publishedAt: '2022-08-03T12:31:51.000Z',
      updatedAt: '2022-08-03T12:31:51.835Z',
      launches: [],
      events: [],
    },
    {
      id: 825,
      title: 'The Cost of SLS and Orion',
      url: 'https://www.planetary.org/space-policy/cost-of-sls-and-orion',
      imageUrl:
        'https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x3596_crop_center-center_82_line/20150515_BN_Full_072_ca.jpg',
      newsSite: 'Planetary Society',
      summary:
        'NASA has spent nearly $50 billion on the SLS, Orion, and related ground infrastructure programs prior to their first test launch in 2022.',
      publishedAt: '2022-08-03T12:02:02.000Z',
      updatedAt: '2022-08-03T12:02:02.329Z',
      launches: [],
      events: [],
    },
    {
      id: 824,
      title: "Triton, Neptune's largest moon",
      url: 'https://www.planetary.org/worlds/triton',
      imageUrl:
        'https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x3596_crop_center-center_82_line/20150515_BN_Full_072_ca.jpg',
      newsSite: 'Planetary Society',
      summary: 'Triton is likely a captured Kuiper Belt Object and possibly an ocean world.',
      publishedAt: '2022-08-02T14:02:02.000Z',
      updatedAt: '2022-08-02T14:02:02.883Z',
      launches: [],
      events: [],
    },
  ],
  user: {
    id: '1',
    username: 'valeria',
    email: 'lera@mail.ru',
  },
};

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
