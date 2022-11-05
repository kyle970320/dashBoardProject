import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader'

const Loading = () => {
  return (
    <PulseLoader
      color="#0094FF"
      margin={7}
      size={30}
      speedMultiplier={1}
    />
  );
};

export default Loading;