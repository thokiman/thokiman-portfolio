import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;

const shrinkLabel = css`
  top: -15px;
  font-size: 30px;
  color: ${heavyLightBlueColor};
  @media only screen and (max-width: 1024px) {
    top: -1.5vh;
  }
`;
const shrinkLabelMobile = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    color: ${heavyLightBlueColor};
    font-size: 4vw;
    top: -2vh;
  }
  @media only screen and (max-width: 550px) {
    font-size: 5vw;
    top: -2.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    font-size: 5.5vw;
    top: -1.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
  }

  @media only screen and (max-width: 300px) {
    top: -2vh;
  }
`;
// **
export const FormInputGroup = styled.div`
  position: relative;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormInputCheckerContainer = styled.span`
  color: ${greenBlueColor};
  position: absolute;
  left: -1.1vw;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: -3vw;
  }

  @media only screen and (max-width: 550px) {
    top: 4vh;
  }

  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: 3vh;
  }

  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: 4vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 731px) {
    top: 3vh;
  }
  @media only screen and (max-width: 300px) {
    top: 4vh;
  }
`;
const FormInputCheckerIconStyles = css`
  width: 2vw;
  height: 2vh;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 3.5vw;
    height: 3.5vh;
  }
`;
export const FormInputCheckerIconTrue = styled(FaCheckCircle)`
  ${FormInputCheckerIconStyles}
`;
export const FormInputCheckerIconFalse = styled(FaTimesCircle)`
  ${FormInputCheckerIconStyles}
`;

export const FormInputElement = styled.input`
  background: none;
  color: ${greenBlueColor};
  font-size: 25px;
  letter-spacing: 0.1em;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${greenBlueColor};
  margin: 15px 0;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill::first-line {
    -webkit-text-fill-color: ${greenBlueColor};
    transition: background-color 6000s ease-in-out;
    font-family: futura-medium;
    font-size: 25px;
  }
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabel}
  }

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    &:focus ~ label {
      ${shrinkLabelMobile}
    }
    margin: 1.5vh 0;
  }
  @media only screen and (max-width: 300px) {
    margin: 1vh 0;
  }
`;

const getFormLabelElementShrink = ({ $formvalue }) => {
  if ($formvalue.length) return shrinkLabel;
};

const getFormLabelElementShrinkMobile = ({ $formvalue }) => {
  if ($formvalue.length) return shrinkLabelMobile;
};
// **
export const FormLabelElement = styled.label`
  color: ${greenBlueColor};
  font-size: 35px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 10px;
  transition: 300ms ease all;
  ${getFormLabelElementShrink}
  @media only screen and (max-width: 1024px) {
    font-size: 3vw;
    ${getFormLabelElementShrink}
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5vw;
    top: 0.5vh;
    left: 4vw;
    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 550px) {
    font-size: 6vw;
    top: 1.5vh;

    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: 2.5vh;

    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 300px) {
    top: 4vh;

    ${getFormLabelElementShrinkMobile}
  }
`;
FormInputGroup.displayName = 'FormInputGroup';
FormInputCheckerContainer.displayName = 'FormInputCheckerContainer';
FormInputCheckerIconTrue.displayName = 'FormInputCheckerIconTrue';
FormInputCheckerIconFalse.displayName = 'FormInputCheckerIconFalse';
FormInputElement.displayName = 'FormInputElement';
FormLabelElement.displayName = 'FormLabelElement';
