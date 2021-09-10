import React from 'react';
import {
  FormSelectTitleActive,
  FormSelectTitleContainer,
} from './form-select-label.styles';

export const FormInputSelectLabel = ({ value }) => {
  return (
    <FormSelectTitleContainer $formvalue={value}>
      {value ? (
        <FormSelectTitleActive>Type of Inquiry :</FormSelectTitleActive>
      ) : (
        ''
      )}
    </FormSelectTitleContainer>
  );
};

export default FormInputSelectLabel;
