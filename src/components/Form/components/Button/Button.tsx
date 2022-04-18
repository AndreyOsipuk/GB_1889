import React, { FC } from 'react';
// import { Button as ButtonUI } from '@mui/material';
import style from './Button.module.scss';

interface ButtonProps {
  disabled: boolean;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ disabled, onButtonClick }) => (
  <button
    // variant="contained"
    type="submit"
    disabled={disabled}
    onClick={onButtonClick}
    className={style.button}
  >
    click
  </button>
);
