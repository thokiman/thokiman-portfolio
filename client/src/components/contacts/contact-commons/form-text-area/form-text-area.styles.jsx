import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;

const shrinkLabel = css`
  top: -35px;
  font-size: 30px;
  color: ${heavyLightBlueColor};
  @media only screen and (max-width: 1024px) {
    top: -1.5vh;
  }
`;
// **
const shrinkLabelMobile = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    color: ${heavyLightBlueColor};
    font-size: 4vw;
    top: -1.5vh;
  }
  @media only screen and (max-width: 550px) {
    font-size: 5.5vw;
    top: -2.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: -0.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: 0vh;
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    top: 1vh;
  }
  @media only screen and (max-width: 300px) {
  }
`;
export const FormTextAreaGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  @media only screen and (max-width: 1024px) {
    top: -2.3vh;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    top: -5vh;
  }
  @media only screen and (max-width: 550px) {
    top: -1vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: -5.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: -6.5vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 731px) {
    top: -7.5vh;
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    top: -11vh;
  }
  @media only screen and (max-width: 300px) {
    top: -12vh;
  }
`;
// **
export const FormTextAreaCheckerContainer = styled.span`
  position: absolute;
  top: 4.5vh;
  left: -0.97vw;
  color: ${greenBlueColor};

  @media only screen and (max-width: 1024px) {
    top: 3.7vh;
  }

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: -2.5vw;
    top: 5vh;
  }

  @media only screen and (max-width: 550px) {
    top: 7vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 823px) {
    top: 6vh;
  }

  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: 7vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 736px) {
    top: 7vh;
  }
  @media only screen and (max-width: 470px) and (max-height: 640px) {
    top: 14vh;
  }
  @media only screen and (max-width: 350px) and (max-height: 568px) {
    top: 10.5vh;
  }
  @media only screen and (max-width: 300px) {
    left: -2vw;
    top: 8vh;
  }
`;
const FormTextAreaCheckerIconStyles = css`
  width: 2vw;
  height: 2vh;
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    width: 3.5vw;
    height: 3.5vh;
  }
`;
export const FormTextAreaCheckerIconTrue = styled(FaCheckCircle)`
  ${FormTextAreaCheckerIconStyles}
`;
export const FormTextAreaCheckerIconFalse = styled(FaTimesCircle)`
  ${FormTextAreaCheckerIconStyles}
`;

export const FormTextAreaElement = styled.textarea`
  background: none;
  color: ${greenBlueColor};
  font-size: 25px;
  letter-spacing: 0.1em;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90%;
  border: none;
  border-radius: 0;
  border-top: 1px solid ${greenBlueColor};
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
  @media only screen and (max-width: 1024px) {
    margin: 35px 0;
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    &:focus ~ label {
      ${shrinkLabelMobile}
    }
    margin: 40px 0;
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
  top: 30px;
  transition: 300ms ease all;
  ${getFormLabelElementShrink}
  @media only screen and (max-width: 1024px) {
    font-size: 3vw;
    top: 3vh;
    ${getFormLabelElementShrink}
  }
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 5vw;
    top: 6vh;
    left: 5vw;
    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 550px) {
    font-size: 6vw;

    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 470px) and (max-height: 812px) {
    top: 9vh;
    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 470px) and (max-height: 640px) {
    top: 10vh;
    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 320px) and (max-height: 568px) {
    top: 10vh;

    ${getFormLabelElementShrinkMobile}
  }
  @media only screen and (max-width: 300px) {
    top: 8vh;

    ${getFormLabelElementShrinkMobile}
  }
`;
FormTextAreaGroup.displayName = 'FormTextAreaGroup';
FormTextAreaCheckerContainer.displayName = 'FormTextAreaCheckerContainer';
FormTextAreaCheckerIconTrue.displayName = 'FormTextAreaCheckerIconTrue';
FormTextAreaCheckerIconFalse.displayName = 'FormTextAreaCheckerIconFalse';
FormTextAreaElement.displayName = 'FormTextAreaElement';
FormLabelElement.displayName = 'FormLabelElement';
