import React from "react";

import {
  FormInputTelGroup,
  FormInputTelCheckerContainer,
  FormInputTelCheckerIconTrue,
  FormInputTelCheckerIconFalse,
  FormInputTelElement,
  FormLabelElement,
} from "./form-input-tel.styles";

const FormInputTel = ({ handleChange, label, ...props }) => {
  return (
    <FormInputTelGroup>
      {
        <FormInputTelCheckerContainer>
          {props.value.length && props.value.match(RegExp(props.pattern)) ? (
            <FormInputTelCheckerIconTrue />
          ) : (
            <FormInputTelCheckerIconFalse />
          )}
        </FormInputTelCheckerContainer>
      }
      <FormInputTelElement onChange={handleChange} {...props} />
      {label ? (
        <FormLabelElement value={props.value}>{label}</FormLabelElement>
      ) : null}
    </FormInputTelGroup>
  );
};

export default FormInputTel;
