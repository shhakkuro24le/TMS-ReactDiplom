import React from 'react';
import { Outlet } from 'react-router-dom';
import Posts from '../../Pages/Posts';
import Header from '../Header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>2022</footer>
    </>
  );
};

export default Main;
