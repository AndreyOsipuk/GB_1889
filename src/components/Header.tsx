import { NavLink, Outlet } from 'react-router-dom';
import React, { FC } from 'react';

const navigate = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile',
  },
  {
    id: 3,
    name: 'Chats',
    to: '/chats',
  },
  {
    id: 4,
    name: 'About',
    to: '/about',
  },
];

export const Header: FC = () => (
  <header>
    <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
      {navigate.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.to}
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>

    <main>
      <Outlet />
    </main>
  </header>
);
