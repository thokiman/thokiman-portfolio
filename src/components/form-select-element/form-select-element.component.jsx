import React from "react";
import { HiArrowCircleLeft } from "react-icons/hi";

import {
  FormSelectValue,
  FormInputCheckerContainer,
  FormInputCheckerIconFalse,
  FormInputCheckerIconTrue,
  FormSelectArrowButton,
  FormSelectTitle,
  FormSelectValueActive,
} from "./form-select-element.styles";

const FormInputSelectElement = ({ handleType, isTypeClick, value }) => {
  return (
    <FormSelectValue onClick={handleType}>
      {
        <FormInputCheckerContainer>
          {value ? <FormInputCheckerIconTrue /> : <FormInputCheckerIconFalse />}
        </FormInputCheckerContainer>
      }
      {value ? (
        <FormSelectValueActive>{value}</FormSelectValueActive>
      ) : (
        <FormSelectTitle>Type of Inquiry :</FormSelectTitle>
      )}
      <FormSelectArrowButton $istypeclick={isTypeClick}>
        <HiArrowCircleLeft />
      </FormSelectArrowButton>
    </FormSelectValue>
  );
};

export default FormInputSelectElement;
