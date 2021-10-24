import React from 'react';
import { FormButtonContainer } from './form-button.styles';

export const FormButton = ({ children, ...props }) => {
  return (
    <FormButtonContainer
      className='contact-form-element'
      type='button'
      {...props}
    >
      {children}
    </FormButtonContainer>
  );
};

export default FormButton;
