import styled, { keyframes } from 'styled-components';

const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;
export const FormSelectContainer = styled.ul`
  list-style-type: none;
  margin: 5px 0;
  padding: 0;
  width: 100%;
`;

const formSelectItemHover = keyframes`
                0% {
                    transform: rotateX(-100deg);
                    transform-origin: top;
                    opacity: 0;

                }

                100% {
                    transform: rotateX(0deg);
                    transform-origin: top;
                    opacity: 1;

                }

`;
export const FormSelectItem = styled.li`
  cursor: pointer;
  width: 100%;
  animation: ${formSelectItemHover} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
  font-size: 20px;
  color: ${heavyLightBlueColor};
  margin-bottom: 5px;

  &:hover {
    color: ${greenBlueColor};
    transition: color linear 0.2s;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 4vw;
    margin-bottom: 15px;
  }
`;

FormSelectContainer.displayName = 'FormSelectContainer';
FormSelectItem.displayName = 'FormSelectItem';
