import React, { useState, useEffect, memo } from 'react';

export const Child = () => {
  const [count, setCount] = useState(0);

  console.log('child render');

  useEffect(() => {
    // console.log('child did mount')
    // let interval;
    // interval = setInterval(() => console.log(1), 1000)
    // return () => {
    //   // console.log('child will unmount')
    //   clearInterval(interval)
    // }
  }, []);

  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  // const memoizedCallback = useCallback(
  //   () => {
  //     doSomething(a, b);
  //   },
  //   [a, b],
  // );

  return (
    <>
      <h3>Child component</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export default memo(Child);
