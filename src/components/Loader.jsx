import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderDiv>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderDiv>
  );
};

export default Loader;
