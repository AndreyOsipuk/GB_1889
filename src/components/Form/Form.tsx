import React, { useState, FC, memo } from 'react';
import { Input } from '@mui/material';
import { Button } from './components/Button';
import { useDispatch } from 'react-redux';
import { addMessage, addMessageWithReply } from 'src/store/chats/actions';
import { useParams } from 'react-router-dom';
import { AUTHOR } from 'src/constants';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId && value) {
      dispatch(
        addMessageWithReply(chatId, { text: value, author: AUTHOR.USER })
      );
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={!value} />
    </form>
  );
});
