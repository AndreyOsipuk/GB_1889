import React from 'react';

interface WithClassesProps {
  classes: string;
}

export function WithClasses<T>(
  Component: React.ComponentType<T & WithClassesProps>
) {
  return function Wrapper(props: T & WithClassesProps) {
    return (
      <div className={props.classes}>
        <Component {...props} />
      </div>
    );
  };
}
