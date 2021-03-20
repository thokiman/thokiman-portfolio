import React from "react";

import {
  FormSelectContainer,
  FormSelectItem,
} from "./form-select-options-element.styles";

const FormInputSelectOptions = ({ handleClick }) => {
  return (
    <FormSelectContainer>
      <FormSelectItem onClick={handleClick}>Engineering</FormSelectItem>
      <FormSelectItem onClick={handleClick}>
        Web/Mobile Development
      </FormSelectItem>
      <FormSelectItem onClick={handleClick}>Graphic Design</FormSelectItem>
      <FormSelectItem onClick={handleClick}>Photography</FormSelectItem>
    </FormSelectContainer>
  );
};

export default FormInputSelectOptions;
