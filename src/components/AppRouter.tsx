import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { FC, Suspense, useEffect } from 'react';

import { AboutWithConnect } from 'src/pages/About';
import { Articles } from 'src/pages/Articles';
import { Chats } from 'src/pages/Chats/Chats';
import { Home } from 'src/pages/Home';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';

import { ChatList } from './ChatList';
import { Header } from './Header';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { ChatState } from 'src/store/chats/slice';
import { auth } from 'src/services/firebase';
import { changeAuth } from 'src/store/profile/slice';
import { initialMessagesFB } from 'src/store/chats/slice';

// import { Profile } from 'src/pages/Profile';

const Profile = React.lazy(() =>
  Promise.all([
    import('src/pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
);

export const AppRouter: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<ChatState, void, any>>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(initialMessagesFB());
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route
              path="profile"
              element={<PrivateRoute component={<Profile />} />}
            />

            <Route path="chats" element={<PrivateRoute />}>
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<Chats />} />
            </Route>

            <Route path="about" element={<AboutWithConnect />} />
            <Route path="articles" element={<Articles />} />

            <Route
              path="signin"
              element={<PublicRoute component={<SignIn />} />}
            />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
