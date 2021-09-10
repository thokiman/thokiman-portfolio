import React from 'react';
import {
  FormInputCheckerContainer,
  FormInputCheckerIconFalse,
  FormInputCheckerIconTrue,
  FormInputElement,
  FormInputGroup,
  FormLabelElement,
} from './form-input.styles';

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
        <FormLabelElement $formvalue={props.value}>{label}</FormLabelElement>
      ) : null}
    </FormInputGroup>
  );
};

export default FormInput;
