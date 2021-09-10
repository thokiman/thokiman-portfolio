import styled from 'styled-components';

const backgroundColorSpinnerContainer = '#000000';

export const SpinnerContainer = styled.div`
  height: 77vh;
  background-color: ${backgroundColorSpinnerContainer};
  display: flex;
  align-items: center;
  justify-content: center;
`;

SpinnerContainer.displayName = 'SpinnerContainer';
