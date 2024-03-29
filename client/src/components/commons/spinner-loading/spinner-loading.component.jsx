import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { SpinnerContainer } from './spinner-loading.styles';


export const SpinnerLoading = () => (
  <SpinnerContainer>
    <Loader
      type="Watch"
      color="#e3e1e4"
      height={200}
      width={200}
      visible
    />
  </SpinnerContainer>
);

export default SpinnerLoading;
