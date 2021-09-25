import styled, { css, keyframes } from 'styled-components';
const heavyLighBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;
const formSelectActive = keyframes`
            0% {
                transform: translateZ(-20px) translateY(20px) translateX(-20px);
                opacity: 0;
            }

            100% {
                transform: translateZ(0) translateY(0) translateX(0);
                opacity: 1;
            }

`;
export const FormSelectTitleActive = styled.div`
  text-align: start;
  width: 100%;
  font-size: 30px;
  color: ${heavyLighBlueColor};
  margin-bottom: 5px;
  animation: ${formSelectActive} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media only screen and (max-width: 1024px) {
    font-size: 3vw;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    font-size: 4vw;
    top: -1vh;
    left: 2vw;
  }
  @media only screen and (max-width: 550px) {
    font-size: 5.5vw;
    top: -0.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    font-size: 5.5vw;
    top: 0.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    font-size: 5.5vw;
    top: 1vh;
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    font-size: 5.5vw;
    top: 2vh;
  }
  @media only screen and (max-width: 300px) {
    font-size: 5.5vw;
    top: 2.5vh;
  }
`;

const FormSelectTitleContainerActive = css`
  height: 39px;
`;

const getFormSelectTitleContainerActive = ({ $formvalue }) => {
  if (!!$formvalue) return FormSelectTitleContainerActive;
};
export const FormSelectTitleContainer = styled.div`
  display: block;
  height: 0px;
  transition: height 0.5s ease-in-out;

  ${getFormSelectTitleContainerActive}
`;
FormSelectTitleActive.displayName = 'FormSelectTitleActive';
FormSelectTitleContainer.displayName = 'FormSelectTitleContainer';
