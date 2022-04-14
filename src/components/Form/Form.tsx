import React, { useState, useEffect, FC, memo } from 'react';
import { Input } from '@mui/material';
import { Button } from './components/Button';
// import cat from './assets/cat.jpeg';

interface FormProps {
  addMessage: (a: string) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('change props');
  }, [addMessage]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      {/* <img src={cat} /> */}
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={!value} />
    </form>
  );
});
