import { useDispatch } from 'react-redux';
import React, { FC, useState } from 'react';

import { signUp } from 'src/services/firebase';
import { useNavigate } from 'react-router-dom';

export const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await signUp(email, password);
      navigate('/signin');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
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
        <button>sign up</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
};
