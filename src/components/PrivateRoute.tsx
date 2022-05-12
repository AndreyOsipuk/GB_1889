import { useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  Route,
  RouteProps,
  useOutlet,
} from 'react-router-dom';
import React, { FC } from 'react';

import { selectAuth } from 'store/profile/selectors';

interface PrivateRouteProps {
  component?: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const isAuth = useSelector(selectAuth);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return component ? component : <Outlet />;
};
