import React from "react";

import {
  FormInputGroup,
  FormInputCheckerContainer,
  FormInputCheckerIconTrue,
  FormInputCheckerIconFalse,
  FormInputElement,
  FormLabelElement,
} from "./form-input.styles";

export const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <FormInputGroup>
      {
        <FormInputCheckerContainer>
          {props.value.length ? (
            <FormInputCheckerIconTrue />
          ) : (
            <FormInputCheckerIconFalse />
          )}
        </FormInputCheckerContainer>
      }
      <FormInputElement onChange={handleChange} {...props} />
      {label ? (
        <FormLabelElement value={props.value}>{label}</FormLabelElement>
      ) : null}
    </FormInputGroup>
  );
};

export default FormInput;
