import { useDispatch } from 'react-redux';
import React, { FC, useState } from 'react';

import { changeAuth } from 'src/store/profile/slice';

export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);
    if (login === 'gb' && password === 'gb') {
      dispatch(changeAuth(true));
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <p>Логин:</p>
        <input
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <p>Пароль:</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button>sign in</button>

        {error && <p style={{ color: 'red' }}>Логин или пароль не верны</p>}
      </form>
    </>
  );
};
