import styled, { css } from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const subColor = "#128194";
const mainColor = "#bccfd5";

const shrinkLabel = css`
  top: -15px;
  font-size: 2vw;
  color: ${mainColor};
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
  color: ${subColor};
  position: absolute;
  left: -1.5vw;
`;
const FormInputTelCheckerIconStyles = css`
  width: 2vw;
  height: 2vh;
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
  color: ${subColor};
  font-size: 25px;
  letter-spacing: 0.1em;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 15px 1vw;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill::first-line {
    -webkit-text-fill-color: ${subColor};
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

const FormInputTelElementAreaCode = css`
  ${FormInputTelElementStyles}
  width: 90px;
`;
const FormInputTelElementPhoneNumber = css`
  ${FormInputTelElementStyles}
  width: 225px;
`;

const getFormInputTelElement = (props) => {
  if (props.name === "area") return FormInputTelElementAreaCode;
  return FormInputTelElementPhoneNumber;
};

export const FormInputTelElement = styled.input`
  ${getFormInputTelElement}
`;

const getFormLabelElementShrink = (props) => {
  if (props.value.length) return shrinkLabel;
};

export const FormLabelElement = styled.label`
  color: ${subColor};
  font-size: 2vw;
  font-weight: normal;
  pointer-events: none;
  position: absolute;
  top: 1.5vh;
  left: 2vw;
  transition: 300ms ease all;
  ${getFormLabelElementShrink}
`;

FormInputTelGroup.displayName = "FormInputTelGroup";
FormInputTelCheckerContainer.displayName = "FormInputTelCheckerContainer ";
FormInputTelCheckerIconTrue.displayName = "FormInputTelCheckerIconTrue";
FormInputTelCheckerIconFalse.displayName = "FormInputTelCheckerIconFalse";
FormInputTelElement.displayName = "FormInputTelElement";
FormLabelElement.displayName = "FormLabelElement";
