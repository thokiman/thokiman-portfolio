import styled from 'styled-components';

const heavyBlueLightColor = '#bccfd5';
const backgroundColorFormButtonContainer = 'rgba(63, 66, 73, 0.7)';
const greenBlueColor = '#128194';
export const FormButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 35px;
  background-color: ${backgroundColorFormButtonContainer};
  color: ${heavyBlueLightColor};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: futura-medium;
  &:hover {
    transition: all ease-in-out 0.3s;
    background-color: ${greenBlueColor};
    color: ${heavyBlueLightColor};
  }
`;

FormButtonContainer.displayName = 'FormButtonContainer';
