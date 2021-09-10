import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const greenBlueColor = '#128194';
const heavyLightBlueColor = '#bccfd5';
const maxWidthSmartphone = 800;

const shrinkLabel = css`
  top: -15px;
  font-size: 30px;
  color: ${heavyLightBlueColor};
`;

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
`;

const getFormLabelElementShrink = ({ $formvalue }) => {
  if ($formvalue.length) return shrinkLabel;
};

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
`;
FormInputGroup.displayName = 'FormInputGroup';
FormInputCheckerContainer.displayName = 'FormInputCheckerContainer';
FormInputCheckerIconTrue.displayName = 'FormInputCheckerIconTrue';
FormInputCheckerIconFalse.displayName = 'FormInputCheckerIconFalse';
FormInputElement.displayName = 'FormInputElement';
FormLabelElement.displayName = 'FormLabelElement';
