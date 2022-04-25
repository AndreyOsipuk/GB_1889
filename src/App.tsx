import React, { FC, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { AboutWithConnect } from './pages/About';

const Chats = React.lazy(() =>
  import('./pages/Chats/Chats').then((module) => ({
    default: module.Chats,
  }))
);

import './App.scss';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />

              <Route path="chats">
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<Chats />} />
              </Route>

              <Route path="about" element={<AboutWithConnect />} />
            </Route>

            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeContext.Provider>
  );
};
