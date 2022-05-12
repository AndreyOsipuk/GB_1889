import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import React, { FC } from 'react';

import { selectAuth } from 'store/profile/selectors';

interface IPrivateRoute {
  children?: JSX.Element;
}

export const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  const isAuth = useSelector(selectAuth);

  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return children ? children : <Outlet />;
};
