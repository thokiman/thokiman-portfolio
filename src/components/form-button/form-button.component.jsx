import React from "react";

import "./form-button.style.scss";

export const FormButton = ({ children, ...props }) => {
  return (
    <button className="form-button" type="button" {...props}>
      {children}
    </button>
  );
};

export default FormButton;
