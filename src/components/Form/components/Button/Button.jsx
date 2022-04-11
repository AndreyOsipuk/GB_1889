import React from 'react';

export const Button = ({ disabled, onButtonClick }) => {
  return (
    <button type="submit" disabled={disabled} onClick={onButtonClick}>
      click
    </button>
  );
};
