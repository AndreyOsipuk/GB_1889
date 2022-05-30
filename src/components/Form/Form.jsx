import React, { useState } from 'react';
import { Button } from './components/Button/Button';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={!value} onButtonClick={() => {}} />
    </form>
  );
};
