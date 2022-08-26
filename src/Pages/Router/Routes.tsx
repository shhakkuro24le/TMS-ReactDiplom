import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../../Components/Main';
import SighIn from '../SignIn/SigIn';
import ResetPassword from '../../Components/RessetPassword/RessetPassword';
import Registration from '../Registration';
import Posts from '../Posts';
import Post from '../Post/Post';
import { FC } from 'react';
import { Error404 } from '../Error404';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<SighIn />} />

          <Route path="posts" element={<Posts />} />
          <Route path="post/:postId" element={<Post />} />

          <Route path="resset" element={<ResetPassword />} />
          <Route path="register" element={<Registration />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
