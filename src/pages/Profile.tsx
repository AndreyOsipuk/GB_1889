import React, { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from './../utils/ThemeContext';
import { changeName, toggleProfile } from '../store/profile/actions';
import { selectName, selectVisible } from 'src/store/profile/selectors';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'light' ? '🌞' : '🌙'} </p>
        <button onClick={toggleTheme}>change theme</button>
      </div>
      <hr />
      <div>
        <p>{name}</p>
        <input type="checkbox" checked={visible} />
        <button onClick={() => dispatch(toggleProfile())}>
          change visible
        </button>
        <br />

        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
      </div>
    </>
  );
};
