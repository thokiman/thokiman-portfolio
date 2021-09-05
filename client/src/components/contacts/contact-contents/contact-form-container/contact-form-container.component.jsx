import React, { useState } from "react";
import { FaPeace, FaRegHandPeace } from "react-icons/fa";
import { GiDiamondsSmile } from "react-icons/gi";
import { RiMailSendFill } from "react-icons/ri";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import {
  postFormContactStart, toggleSubmitButtonClick,
  toggleTypeFillFormClick,
  toggleTypeSubmitFormClick
} from "../../../../redux/contact/contact.actions";
import {
  selectIsButtonClickContact,
  selectIsTypeClickContact
} from "../../../../redux/contact/contact.selectors";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import { toTitleCase } from "../../../../utils/contact.component.utils";
import FormButton from "../../contact-commons/form-button/form-button.component";
import FormInputSelect from "../../contact-commons/form-custom-select/form-select/form-select.component";
import FormInputTel from "../../contact-commons/form-input-tel/form-input-tel.component";
import FormInput from "../../contact-commons/form-input/form-input.component";
import FormTextArea from "../../contact-commons/form-text-area/form-text-area.component";
import {
  ButtonIcon,
  ContactFormContainer,
  ContactFormGroup,
  ContactFormHead,
  ContactFormSubhead
} from "./contact-form-container.styles";


export const ContactForm = ({
  isSideBarHidden,
  isTypeClick,
  isButtonClick,
  toggleSubmitButtonClick,
  toggleTypeFillFormClick,
  toggleTypeSubmitFormClick,
  postFormContactStart,
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
    <ContactFormContainer
      $istypeclick={isTypeClick}
      $issidebarhidden={isSideBarHidden}
    >
      <ContactFormGroup $istypeclick={isTypeClick}>
        <ContactFormHead>General Inquiries</ContactFormHead>
        <ContactFormSubhead>
          Interested in working together ? Tell me about your company... Happy
          to help <FaPeace /> <FaRegHandPeace />
        </ContactFormSubhead>
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
          <FormInputTel
            type="tel"
            handleChange={handleItemChange}
            name="area"
            value={area}
            pattern="\+[0-9]{2,3}$"
            label="Country Code | +xx | +xxx"
            maxLength="4"
            minLength="3"
          />
          <FormInputTel
            type="tel"
            handleChange={handleItemChange}
            name="phone"
            value={phone}
            pattern="^[0-9]{7,13}$"
            label="Phone Number | xxxxxxxxx"
            maxLength="13"
            minLength="7"
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
              !area.match(RegExp(/\+[0-9]{2,3}$/)) &&
              !phone.match(RegExp(/^[0-9]{7,13}$/)) ? (
              <ButtonIcon>
                <GiDiamondsSmile /> Thanks
              </ButtonIcon>
            ) : (
              <ButtonIcon>
                <RiMailSendFill /> Send
              </ButtonIcon>
            )}
          </FormButton>
        </form>
      </ContactFormGroup>
    </ContactFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isTypeClick: selectIsTypeClickContact,
  isButtonClick: selectIsButtonClickContact,
  isSideBarHidden: selectIsSideBarHidden,
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
