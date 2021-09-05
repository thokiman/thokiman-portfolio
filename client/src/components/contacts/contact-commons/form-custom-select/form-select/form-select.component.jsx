import React from "react";
import FormInputSelectElement from "../form-select-element/form-select-element.component";
import FormInputSelectLabel from "../form-select-label/form-select-label.component";
import FormInputSelectOptions from "../form-select-options-element/form-select-options-element.component";

import { FormGroupSelectContainer } from "./form-select.styles";

export const FormInputSelect = ({
  handleType,
  isTypeClick,
  handleClick,
  value,
}) => {
  return (
    <FormGroupSelectContainer>
      <FormInputSelectLabel value={value} />
      <FormInputSelectElement
        handleType={handleType}
        isTypeClick={isTypeClick}
        value={value}
      />
      {isTypeClick ? <FormInputSelectOptions handleClick={handleClick} /> : ""}
    </FormGroupSelectContainer>
  );
};

export default FormInputSelect;
