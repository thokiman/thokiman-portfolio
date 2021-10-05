import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import useWindowDimensions from '../../hooks/window-dimensions/useWindowDimensions.component';
import { SpinnerContainer } from './spinner-loading.styles';
import { measureSizeSpinnerLoading } from './spinner-loading.utils';
export const SpinnerLoading = () => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  const { widthSpinner, heightSpinner } = measureSizeSpinnerLoading(
    viewWidth,
    viewHeight
  );
  const whiteSmokeColor = '#e3e1e4';
  const loadingIcon = 'Watch';
  return (
    <SpinnerContainer>
      <Loader
        type={loadingIcon}
        color={whiteSmokeColor}
        height={heightSpinner}
        width={widthSpinner}
        visible
      />
    </SpinnerContainer>
  );
};

export default SpinnerLoading;
