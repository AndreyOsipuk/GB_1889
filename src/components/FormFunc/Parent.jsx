import React, { useState, useEffect, useRef } from 'react';
import { Child } from './Child';

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const inputEl = useRef(null);

  useEffect(() => {
    console.log('parent did mount');
    console.log(inputEl);
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    console.log('count and toggle changed');
  }, [count, toggle]);

  return (
    <>
      <h3>Parent component</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <br />
      <input type="text" ref={inputEl} />
      <hr />

      {toggle && <Child count={0} />}
    </>
  );
};
