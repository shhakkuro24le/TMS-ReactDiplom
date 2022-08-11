import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
interface ProtectedRouteProps {
  children?: any;
  issAllow: boolean;
  pathToRedirect: string;
}
export const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
  const { pathToRedirect, issAllow, children } = props;
  const location = useLocation();
  if (!issAllow) {
    return <Navigate to={pathToRedirect} state={{ from: location }} />;
  }
  return children ? children : <Outlet />;
};
