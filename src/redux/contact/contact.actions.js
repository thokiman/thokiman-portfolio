import ContactActionTypes from "./contact.types";

export const toggleSubmitButtonClick = () => ({
  type: ContactActionTypes.TOGGLE_SUBMIT_BUTTON_FORM_CLICK,
});
export const toggleTypeFillFormClick = () => ({
  type: ContactActionTypes.TOGGLE_TYPE_FILL_FORM_CLICK,
});
export const toggleTypeSubmitFormClick = () => ({
  type: ContactActionTypes.TOGGLE_TYPE_SUBMIT_FORM_CLICK,
});
