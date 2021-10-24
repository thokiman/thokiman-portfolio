import React from 'react';
import {
  FormInputTelCheckerContainer,
  FormInputTelCheckerIconFalse,
  FormInputTelCheckerIconTrue,
  FormInputTelElement,
  FormInputTelGroup,
  FormLabelElement,
} from './form-input-tel.styles';

export const FormInputTel = ({ handleChange, label, ...props }) => {
  return (
    <FormInputTelGroup className='contact-form-element'>
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
        <FormLabelElement $formvalue={props.value}>{label}</FormLabelElement>
      ) : null}
    </FormInputTelGroup>
  );
};

export default FormInputTel;
