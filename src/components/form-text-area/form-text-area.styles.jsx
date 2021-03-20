import styled, { css } from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const subColor = "#128194";
const mainColor = "#bccfd5";

const shrinkLabel = css`
  top: -35px;
  font-size: 30px;
  color: ${mainColor};
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
  color: ${subColor};
`;
const FormTextAreaCheckerIconStyles = css`
  width: 2vw;
  height: 2vh;
`;
export const FormTextAreaCheckerIconTrue = styled(FaCheckCircle)`
  ${FormTextAreaCheckerIconStyles}
`;
export const FormTextAreaCheckerIconFalse = styled(FaTimesCircle)`
  ${FormTextAreaCheckerIconStyles}
`;

export const FormTextAreaElement = styled.textarea`
  background: none;
  color: ${subColor};
  font-size: 25px;
  letter-spacing: 0.1em;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90%;
  border: none;
  border-radius: 0;
  border-top: 1px solid ${subColor};
  border-bottom: 1px solid ${subColor};
  margin: 15px 0;

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

const getFormLabelElementShrink = (props) => {
  if (props.value.length) return shrinkLabel;
};

export const FormLabelElement = styled.label`
  color: ${subColor};
  font-size: 35px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 30px;
  transition: 300ms ease all;
  ${getFormLabelElementShrink}
`;
FormTextAreaGroup.displayName = "FormTextAreaGroup";
FormTextAreaCheckerContainer.displayName = "FormTextAreaCheckerContainer";
FormTextAreaCheckerIconTrue.displayName = "FormTextAreaCheckerIconTrue";
FormTextAreaCheckerIconFalse.displayName = "FormTextAreaCheckerIconFalse";
FormTextAreaElement.displayName = "FormTextAreaElement";
FormLabelElement.displayName = "FormLabelElement";
