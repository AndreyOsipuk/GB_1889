import React, { useState, useCallback } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const Form = () => {
  const [name] = useState('click');
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setMessages([...messages, value]);
    setValue('');
  };

  const handleChange = useCallback((ev) => {
    setValue(ev.target.value);
  }, []);

  return (
    <>
      {visible && (
        <ul>
          {messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      )}

      <Input change={handleChange} value={value} />
      <Button name={name} click={handleClick} />

      <br />
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
    </>
  );
};
