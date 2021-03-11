import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "./form-text-area.styles.scss";

const FormTextArea = ({ handleChange, label, ...props }) => {
  return (
    <div className="group-text-area">
      {
        <span className="checker-area-code">
          {props.value.length ? (
            <FaCheckCircle className="checker-icon" />
          ) : (
            <FaTimesCircle className="checker-icon" />
          )}
        </span>
      }
      <textarea className="form-text-area" onChange={handleChange} {...props} />
      {label ? (
        <label
          className={`form-text-area-label${
            props.value.length ? " shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormTextArea;
