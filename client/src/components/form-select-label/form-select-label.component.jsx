import React from "react";

import {
  FormSelectTitleActive,
  FormSelectTitleContainer,
} from "./form-select-label.styles";

const FormInputSelectLabel = ({ value }) => {
  return (
    <FormSelectTitleContainer value={value}>
      {value ? (
        <FormSelectTitleActive>Type of Inquiry :</FormSelectTitleActive>
      ) : (
        ""
      )}
    </FormSelectTitleContainer>
  );
};

export default FormInputSelectLabel;
