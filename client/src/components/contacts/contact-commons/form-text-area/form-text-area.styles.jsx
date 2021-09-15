import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;

const shrinkLabel = css`
  top: -35px;
  font-size: 30px;
  color: ${heavyLightBlueColor};
`;
const shrinkLabelMobile = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    color: ${heavyLightBlueColor};
    font-size: 7vw;
    top: -4vh;
  }
`;
export const FormTextAreaGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
`;
export const FormTextAreaCheckerContainer = styled.span`
  position: absolute;
  top: 29vh;
  left: -0.97vw;
  color: ${greenBlueColor};
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: -2.5vw;
    top: 6vh;
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
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
    top: 6vh;
    left: 5vw;
    ${getFormLabelElementShrinkMobile}
  }
`;
FormTextAreaGroup.displayName = 'FormTextAreaGroup';
FormTextAreaCheckerContainer.displayName = 'FormTextAreaCheckerContainer';
FormTextAreaCheckerIconTrue.displayName = 'FormTextAreaCheckerIconTrue';
FormTextAreaCheckerIconFalse.displayName = 'FormTextAreaCheckerIconFalse';
FormTextAreaElement.displayName = 'FormTextAreaElement';
FormLabelElement.displayName = 'FormLabelElement';
