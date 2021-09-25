import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';

const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';
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

export const FormSelectValue = styled.div`
  position: relative;
  right: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 35px;
  color: ${heavyLightBlueColor};
  cursor: pointer;
`;

export const FormSelectValueActive = styled.div`
  font-size: 30px;
  text-align: center;
  width: 90%;
  color: ${greenBlueColor};
  padding: 5px;
  animation: ${formSelectActive} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  border-bottom: ${greenBlueColor} solid 1px;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    position: relative;
    font-size: 6vw;
    left: 3.5vw;
  }
`;

const FormSelectValueHoverStyles = css`
  color: ${heavyLightBlueColor};
  transition: color linear 0.2s;
`;

export const FormSelectTitle = styled.div`
  font-size: 35px;
  text-align: start;
  width: 90%;
  color: ${greenBlueColor};
  position: relative;
  right: -1.5vw;
  padding: 5px;
  padding-bottom: 15px;
  border-bottom: ${greenBlueColor} solid 1px;
  ${FormSelectValue}:hover & {
    ${FormSelectValueHoverStyles}
  }
  @media only screen and (max-width: 1024px) {
    font-size: 3vw;
  }

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5vw;
    top: 0vh;
    left: 3.5vw;
  }
  @media only screen and (max-width: 550px) {
    font-size: 6vw;
  }
  @media only screen and (max-width: 550px) {
  }
  @media only screen and (max-width: 300px) {
  }
`;

const formSelectButtonActive = keyframes`
                    from {
                        transform: rotate(0deg)
                    }

                    to {
                        transform: rotate(-90deg);
                    }

`;

const formSelectButtonHide = keyframes`
                    from {
                        transform: rotate(-90deg)
                    }

                    to {
                        transform: rotate(0deg);
                    }

`;
const FormSelectArrowButtonActive = css`
  animation: ${formSelectButtonActive} linear 0.4s;
  transform: rotate(-90deg);
`;
const getFormSelectArrowButtonActive = ({ $istypeclick }) => {
  if ($istypeclick) return FormSelectArrowButtonActive;
};
export const FormSelectArrowButton = styled.span`
  position: relative;
  left: 10px;
  display: flex;
  align-items: center;
  width: 35px;

  color: ${greenBlueColor};
  animation: ${formSelectButtonHide} linear 0.4s;
  ${getFormSelectArrowButtonActive}
  ${FormSelectValue}:hover & {
    ${FormSelectValueHoverStyles}
  }
`;

// **
export const FormInputCheckerContainer = styled.span`
  position: absolute;
  left: -1vw;
  color: ${greenBlueColor};
  @media only screen and (max-width: 1024px) {
    left: -1vw;
    top: 1vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: -3vw;
    top: 2vh;
  }
  @media only screen and (max-width: 550px) {
    top: 1vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: 0vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: 0vh;
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    top: -1vh;
  }
  @media only screen and (max-width: 300px) {
    left: -2.5vw;
  }
`;

const FormInputTelCheckerIconStyles = css`
  width: 2vw;
  height: 2vh;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 3.5vw;
    height: 3.5vh;
  }
`;
export const FormInputCheckerIconTrue = styled(FaCheckCircle)`
  ${FormInputTelCheckerIconStyles}
`;
export const FormInputCheckerIconFalse = styled(FaTimesCircle)`
  ${FormInputTelCheckerIconStyles}
`;
FormSelectValue.displayName = 'FormSelectValue';
FormSelectValueActive.displayName = 'FormSelectValueActive';
FormSelectTitle.displayName = 'FormSelectTitle';
FormSelectArrowButton.displayName = 'FormSelectArrowButton';
FormInputCheckerContainer.displayName = 'FormInputCheckerContainer';
FormInputCheckerIconTrue.displayName = 'FormInputCheckerIconTrue';
FormInputCheckerIconFalse.displayName = 'FormInputCheckerIconFalse';
