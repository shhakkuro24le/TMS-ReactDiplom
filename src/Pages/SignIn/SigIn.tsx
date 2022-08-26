import { FC } from 'react';

import SignInForm from '../../Components/SignInForm/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/reducers/User/user.reducer';
const SighIn: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const loginHandle = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/posts');
      })
      .catch(() => alert('такой пользователь не найден'));
  };

  return (
    <div>
      <SignInForm loginClick={loginHandle}></SignInForm>
    </div>
  );
};

export default SighIn;
