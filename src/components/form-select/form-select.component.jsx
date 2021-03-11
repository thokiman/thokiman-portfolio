import React from "react";
import { HiArrowCircleLeft } from "react-icons/hi";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "./form-select.styles.scss";

const FormInputSelect = ({ handleType, isTypeClick, handleClick, value }) => {
  return (
    <div className="group-select-container">
      <div className={`select-title-container${value ? " active" : ""}`}>
        {value ? (
          <div className="select-title-active">Type of Inquiry :</div>
        ) : (
          ""
        )}
      </div>
      <div onClick={handleType} className="select-value">
        {
          <span className="checker-area-code">
            {value ? (
              <FaCheckCircle className="checker-icon" />
            ) : (
              <FaTimesCircle className="checker-icon" />
            )}
          </span>
        }
        {value ? (
          <div className="select-value-active">{value}</div>
        ) : (
          <div className="select-title">Type of Inquiry :</div>
        )}
        <span className={`select-arrow-button${isTypeClick ? " active" : ""}`}>
          <HiArrowCircleLeft />
        </span>
      </div>
      {isTypeClick ? (
        <ul className="select-container">
          <li className="select-item" onClick={handleClick}>
            Engineering
          </li>
          <li className="select-item" onClick={handleClick}>
            Web/Mobile Development
          </li>
          <li className="select-item" onClick={handleClick}>
            Graphic Design
          </li>
          <li className="select-item" onClick={handleClick}>
            Photography
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormInputSelect;
