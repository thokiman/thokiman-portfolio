import React, { useState } from "react";
import { FaRegHandPeace, FaPeace } from "react-icons/fa";
import { GiDiamondsSmile } from "react-icons/gi";
import { RiMailSendFill } from "react-icons/ri";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";

import { toTitleCase } from "../../utils/contact.component.utils";
import FormInput from "../form-input/form-input.component";
import FormInputPhoneNumber from "../form-input-phone-number/form-input-phone-number.component";
import FormInputSelect from "../form-select/form-select.component";
import FormTextArea from "../form-text-area/form-text-area.component";
import FormButton from "../form-button/form-button.component";
import {
  selectIsButtonClickContact,
  selectIsTypeClickContact,
} from "../../redux/contact/contact.selectors";
import {
  toggleSubmitButtonClick,
  toggleTypeFillFormClick,
  toggleTypeSubmitFormClick,
  postFormContactStart,
} from "../../redux/contact/contact.actions";
import "./contact-form-container.styles.scss";

const ContactForm = ({
  isTypeClick,
  isButtonClick,
  toggleSubmitButtonClick,
  toggleTypeFillFormClick,
  toggleTypeSubmitFormClick,
  postFormContactStart,
  formData,
  isPosted,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    area: "",
    phone: "",
    company: "",
    type: "",
    message: "",
  });

  const { name, email, country, area, phone, company, type, message } = form;

  const handleItemChange = (e) => {
    if (e.target.tagName === "LI") {
      const { textContent } = e.target;
      setForm({ ...form, type: textContent });
    } else {
      const { value, name } = e.target;
      if (
        e.target.name === "name" ||
        e.target.name === "company" ||
        e.target.name === "country"
      ) {
        setForm({ ...form, [name]: toTitleCase(value) });
      } else setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFormContactStart(form);

    setForm({
      name: "",
      email: "",
      country: "",
      area: "",
      phone: "",
      company: "",
      type: "",
      message: "",
    });
    toggleTypeSubmitFormClick();
    toggleSubmitButtonClick();
  };

  return (
    <div className="contact-form-container">
      <div className={`contact-form-group${isTypeClick ? " active" : ""}`}>
        <div className="contact-form-head">General Inquiries</div>
        <div className="contact-form-subhead">
          Interested in working together ? Tell me about your company... Happy
          to help <FaPeace /> <FaRegHandPeace />
        </div>
        <form onSubmit={handleSubmit}>
          <FormInput
            handleChange={handleItemChange}
            type="text"
            name="name"
            value={name}
            label="Name"
            required
          />
          <FormInput
            handleChange={handleItemChange}
            type="email"
            name="email"
            value={email}
            label="Email"
            required
          />
          <FormInput
            handleChange={handleItemChange}
            type="text"
            name="company"
            value={company}
            label="Company"
            required
          />
          <FormInput
            handleChange={handleItemChange}
            type="text"
            name="country"
            value={country}
            label="Country"
            required
          />
          <FormInputPhoneNumber
            handleChange={handleItemChange}
            nameAreaCode="area"
            valueAreaCode={area}
            patternAreaCode="\+[0-9]{2,3}"
            labelAreaNumber="Country Code | +xx | +xxx"
            maxLengthAreaCode={4}
            minLengthAreaCode={3}
            namePhoneNumber="phone"
            valuePhoneNumber={phone}
            patternPhoneNumber="[0-9]{7,13}"
            labelPhoneNumber="Phone Number | xxxxxxxxx"
            maxLengthPhoneNumber={13}
            minLengthPhoneNumber={7}
            required
          />
          <FormInputSelect
            handleType={toggleTypeFillFormClick}
            handleClick={handleItemChange}
            isTypeClick={isTypeClick}
            value={type}
          />
          <FormTextArea
            handleChange={handleItemChange}
            type="text"
            name="message"
            value={message}
            label="Message"
            rows={9}
            required
          />
          <FormButton type="submit">
            {isButtonClick &&
            !type &&
            !area.match(RegExp(/\+[0-9]{2,3}/)) &&
            !phone.match(RegExp(/[0-9]{7,13}/)) ? (
              <span className="button-icon">
                <GiDiamondsSmile /> Thanks
              </span>
            ) : (
              <span className="button-icon">
                <RiMailSendFill /> Send
              </span>
            )}
          </FormButton>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isTypeClick: selectIsTypeClickContact,
  isButtonClick: selectIsButtonClickContact,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleSubmitButtonClick: toggleSubmitButtonClick,
      toggleTypeFillFormClick: toggleTypeFillFormClick,
      toggleTypeSubmitFormClick: toggleTypeSubmitFormClick,
      postFormContactStart: postFormContactStart,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
