import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const Form = () => {
  const [name, setName] = useState('click')
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setMessages([...messages, value])
    setValue('')
  }

  const handleChange = (ev) => {
    setValue(ev.target.value)
  }

  return <>
    {visible && <ul>
      {messages.map(message =>
        <li>{message}</li>
      )}
    </ul>}

    <Input change={handleChange} value={value} />
    <Button name={name} click={handleClick} />

    <br />
    <button onClick={() => setVisible(!visible)}>
      {visible ? 'hide' : 'show'}
    </button>
  </>

}