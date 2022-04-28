import React, { useState, FC, memo } from 'react';
import { Input } from '@mui/material';
import { Button } from './components/Button';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from 'src/store/chats/actions';
import { useParams } from 'react-router-dom';
import { AUTHOR } from 'src/constants';
import { ThunkDispatch } from 'redux-thunk';
import { ChatsState } from 'src/store/chats/reducer';
import { AddMessage } from 'src/store/chats/types';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

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
