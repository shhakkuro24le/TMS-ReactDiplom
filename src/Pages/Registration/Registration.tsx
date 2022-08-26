import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpForm from '../../Components/SignUpForm';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/reducers/User/user.reducer';
const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerHandler = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };
  return <SignUpForm loginClick={registerHandler}></SignUpForm>;
};

export default Registration;
