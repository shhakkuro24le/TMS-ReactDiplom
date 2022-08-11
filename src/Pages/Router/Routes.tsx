import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../../Components/Main';
import SighIn from '../SignIn/SigIn';
import ResetPassword from '../../Components/RessetPassword/RessetPassword';
import Registration from '../Registration';
import Posts from '../Posts';
import Post from '../Post/Post';
import { ProtectedRoute } from './ProtectedRouter';
import { FC, useEffect } from 'react';
import { Error404 } from '../Error404';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthAC } from '../../Redux/actions/authUser.action';
import { authSelector } from '../../Redux/store/selectors';
import { _store } from '../../App';
import { getPostsAC } from '../../Redux/actions';

export enum Pages { //импортить, чтобы использовать для редиректа на др страницах
  Home = '/',
  SignIn = '/login',
  Resset = '/resset',
  Register = '/register',
  Posts = '/cart',
  UserAccount = '/account',
  SearchPage = '/search',
  Login = '/login',
  Reset = '/reset',
  NotFoundPage = '*',
}

const Router: FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  useEffect(() => {
    dispatch(setAuthAC(true));
    dispatch(getPostsAC(_store.posts));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<SighIn />} />

          {/* <ProtectedRoute issAllow = {auth} pathToRedirect='/'>
        <Route path="posts" element={<Posts posts={postsFromApi} />}>
          <Route path=":id" element={<Post />} />
          <Route />
        </ProtectedRoute> */}

          <Route element={<ProtectedRoute issAllow={auth.auth} pathToRedirect="/" />}>
            <Route path="posts" element={<Posts />} />
            <Route path="post/:postId" element={<Post />} />
          </Route>

          <Route path="resset" element={<ResetPassword />} />
          <Route path="register" element={<Registration />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
function getUserAC(user: any): any {
  throw new Error('Function not implemented.');
}
