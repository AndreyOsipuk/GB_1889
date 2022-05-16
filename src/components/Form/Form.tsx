import { Input } from '@mui/material';
// import { ThunkDispatch } from 'redux-thunk';
import { nanoid } from 'nanoid';
import { push, set } from 'firebase/database';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { FC, memo, useState } from 'react';

import { AUTHOR } from 'src/constants';
// import { AddMessage } from 'src/store/chats/types';
import { Button } from './components/Button';

// import { ChatsState } from 'src/store/chats/reducer';
import { getMessageListById } from 'src/services/firebase';
// import { addMessageWithReply } from 'src/store/chats/slice';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  // const dispatch =
  //   useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId && value) {
      // dispatch(
      //   addMessageWithReply({
      //     chatId,
      //     message: { author: AUTHOR.USER, text: value },
      //   })
      // );
      const id = nanoid();
      push(getMessageListById(chatId), {
        author: AUTHOR.USER,
        id,
        text: value,
      });
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
