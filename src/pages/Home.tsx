import React, { FC } from 'react';

import Gun from 'svg/gun.svg';

export const Home: FC = () => {
  return (
    <>
      <h2>Home</h2>
      <img src={Gun} alt="image" width={100} height={100} />
    </>
  );
};
