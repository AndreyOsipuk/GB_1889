import React, { FC, useState } from 'react';

import { logIn } from 'src/services/firebase';

export const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');

    try {
      await logIn(email, password);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <p>Логин:</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>Пароль:</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button>sign in</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
};
