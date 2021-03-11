import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "./form-input-phone-number.styles.scss";

const FormInputPhoneNumber = ({
  handleChange,
  nameAreaCode,
  valueAreaCode,
  patternAreaCode,
  maxLengthAreaCode,
  minLengthAreaCode,
  labelAreaNumber,
  namePhoneNumber,
  valuePhoneNumber,
  patternPhoneNumber,
  labelPhoneNumber,
  maxLengthPhoneNumber,
  minLengthPhoneNumber,
  ...props
}) => {
  return (
    <div className="group-phone-container">
      <span className="group-input">
        {
          <span className="checker-area-code">
            {valueAreaCode.match(RegExp(patternAreaCode)) ? (
              <FaCheckCircle className="checker-icon" />
            ) : (
              <FaTimesCircle className="checker-icon" />
            )}
          </span>
        }
        <input
          name={nameAreaCode}
          value={valueAreaCode}
          type="tel"
          pattern={patternAreaCode}
          onChange={handleChange}
          className="form-input-area-code"
          maxLength={maxLengthAreaCode}
          minLength={minLengthAreaCode}
          {...props}
        />
        {labelAreaNumber ? (
          <label
            className={`form-input-label-area-code${
              valueAreaCode.length ? " shrink" : ""
            }`}
          >
            {labelAreaNumber}
          </label>
        ) : null}
      </span>
      <span className="group-input">
        {
          <span className="checker-phone-number">
            {valuePhoneNumber.match(RegExp(patternPhoneNumber)) ? (
              <FaCheckCircle className="checker-icon" />
            ) : (
              <FaTimesCircle className="checker-icon" />
            )}
          </span>
        }
        <input
          name={namePhoneNumber}
          value={valuePhoneNumber}
          type="tel"
          pattern={patternPhoneNumber}
          onChange={handleChange}
          className="form-input-phone-number"
          maxLength={maxLengthPhoneNumber}
          minLength={minLengthPhoneNumber}
          {...props}
        />
        {labelPhoneNumber ? (
          <label
            className={`form-input-label-phone-number${
              valuePhoneNumber.length ? " shrink" : ""
            }`}
          >
            {labelPhoneNumber}
          </label>
        ) : null}
      </span>
    </div>
  );
};

export default FormInputPhoneNumber;
