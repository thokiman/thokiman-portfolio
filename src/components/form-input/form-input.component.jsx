import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="group">
      {
        <span className="checker-area-code">
          {props.value.length ? (
            <FaCheckCircle className="checker-icon" />
          ) : (
            <FaTimesCircle className="checker-icon" />
          )}
        </span>
      }
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? (
        <label
          className={`form-input-label${props.value.length ? " shrink" : ""}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
