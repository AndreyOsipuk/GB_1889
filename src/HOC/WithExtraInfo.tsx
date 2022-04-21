import React, { useState } from 'react';

type ExtraInfoType = {
  extraInfo: string;
};

export function WithExtraInfo<P>(
  WrappedComponent: React.ComponentType<P & ExtraInfoType>
) {
  const ComponentWithExtraInfo = (props: P) => {
    const [extraInfo, setExtraInfo] = useState('');
    setExtraInfo('important data');
    return <WrappedComponent {...props} extraInfo={extraInfo} />;
  };
  return ComponentWithExtraInfo;
}
