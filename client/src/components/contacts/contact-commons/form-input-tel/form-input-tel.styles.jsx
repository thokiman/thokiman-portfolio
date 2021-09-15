import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;

const shrinkLabel = css`
  top: -15px;
  font-size: 2vw;
  color: ${heavyLightBlueColor};
`;
const shrinkLabelMobile = css`
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    color: ${heavyLightBlueColor};
    font-size: 5vw;
    top: -0.5vh;
  }
`;

export const FormInputTelGroup = styled.div`
  position: relative;
  left: 8px;
  margin: 25px 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const FormInputTelCheckerContainer = styled.span`
  color: ${greenBlueColor};
  position: absolute;
  left: -1.5vw;

  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    left: -4vw;
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
export const FormInputTelCheckerIconTrue = styled(FaCheckCircle)`
  ${FormInputTelCheckerIconStyles}
`;
export const FormInputTelCheckerIconFalse = styled(FaTimesCircle)`
  ${FormInputTelCheckerIconStyles}
`;

const FormInputTelElementStyles = css`
  background: none;
  position: relative;
  top: 1.5vh;
  left: 1.5vw;
  color: ${greenBlueColor};
  font-size: 25px;
  letter-spacing: 0.1em;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${greenBlueColor};
  margin: 15px 1vw;

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
  }
`;

const FormInputTelElementAreaCode = css`
  ${FormInputTelElementStyles}
  width: 90px;
`;
const FormInputTelElementPhoneNumber = css`
  ${FormInputTelElementStyles}
  width: 225px;
`;

const getFormInputTelElement = (props) => {
  if (props.name === 'area') return FormInputTelElementAreaCode;
  return FormInputTelElementPhoneNumber;
};

export const FormInputTelElement = styled.input`
  ${getFormInputTelElement}
`;

const getFormLabelElementShrink = ({ $formvalue }) => {
  if ($formvalue.length) return shrinkLabel;
};
const getFormLabelElementShrinkMobile = ({ $formvalue }) => {
  if ($formvalue.length) return shrinkLabelMobile;
};

export const FormLabelElement = styled.label`
  color: ${greenBlueColor};
  font-size: 2vw;
  font-weight: normal;
  pointer-events: none;
  position: absolute;
  top: 1.5vh;
  left: 2vw;
  transition: 300ms ease all;
  ${getFormLabelElementShrink}
  @media only screen and (max-width: ${maxWidthSmartphone}px) {
    font-size: 6vw;
    top: 2vh;
    left: 2vw;

    ${getFormLabelElementShrinkMobile}
  }
`;

FormInputTelGroup.displayName = 'FormInputTelGroup';
FormInputTelCheckerContainer.displayName = 'FormInputTelCheckerContainer ';
FormInputTelCheckerIconTrue.displayName = 'FormInputTelCheckerIconTrue';
FormInputTelCheckerIconFalse.displayName = 'FormInputTelCheckerIconFalse';
FormInputTelElement.displayName = 'FormInputTelElement';
FormLabelElement.displayName = 'FormLabelElement';
