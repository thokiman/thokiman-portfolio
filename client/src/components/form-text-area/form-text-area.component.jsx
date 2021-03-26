import React from "react";

import {
  FormLabelElement,
  FormTextAreaCheckerContainer,
  FormTextAreaCheckerIconFalse,
  FormTextAreaCheckerIconTrue,
  FormTextAreaElement,
  FormTextAreaGroup,
} from "./form-text-area.styles";

export const FormTextArea = ({ handleChange, label, ...props }) => {
  return (
    <FormTextAreaGroup>
      {
        <FormTextAreaCheckerContainer>
          {props.value.length ? (
            <FormTextAreaCheckerIconTrue />
          ) : (
            <FormTextAreaCheckerIconFalse />
          )}
        </FormTextAreaCheckerContainer>
      }
      <FormTextAreaElement onChange={handleChange} {...props} />
      {label ? (
        <FormLabelElement $value={props.value}>{label}</FormLabelElement>
      ) : null}
    </FormTextAreaGroup>
  );
};

export default FormTextArea;
