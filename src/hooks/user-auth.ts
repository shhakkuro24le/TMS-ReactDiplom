import { useSelector } from 'react-redux';
import { UserSelectors } from '../Redux/reducers/User/user.reducer';
export const useAuth = () => {
  const user = useSelector(UserSelectors.getUser);
  return {
    isAuth: !!user.email,
    email: user.email,
    tocken: user.tocken,
    id: user.id,
  };
};
