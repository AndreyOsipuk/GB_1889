import React, { FC } from 'react';
// import { Button as ButtonUI } from '@mui/material';
// import './Button.scss';

interface ButtonProps {
  disabled: boolean;
  onButtonClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ disabled, onButtonClick }) => (
  <button
    // variant="contained"
    type="submit"
    disabled={disabled}
    onClick={onButtonClick}
  >
    click
  </button>
);
