import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import React, { FC } from 'react';

import { selectAuth } from 'store/profile/selectors';

interface IPublicRoute {
  restricted?: boolean;
  component?: JSX.Element;
}

export const PublicRoute: FC<IPublicRoute> = ({
  restricted = true,
  component,
}) => {
  const isAuth = useSelector(selectAuth);

  if (isAuth && restricted) {
    return <Navigate to="/" replace />;
  }

  return component ? component : <Outlet />;
};
