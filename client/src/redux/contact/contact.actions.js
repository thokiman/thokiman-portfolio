import ContactActionTypes from './contact.types';

export const postFormContactStart = (form) => ({
  type: ContactActionTypes.POST_FORM_CONTACT_START,
  payload: form,
});
export const postFormContactSuccess = (formData) => ({
  type: ContactActionTypes.POST_FORM_CONTACT_SUCCESS,
  payload: formData,
});
export const postFormContactFailure = (error) => ({
  type: ContactActionTypes.POST_FORM_CONTACT_FAILURE,
  payload: error,
});
export const toggleSubmitButtonClick = () => ({
  type: ContactActionTypes.TOGGLE_SUBMIT_BUTTON_FORM_CLICK,
});
export const toggleTypeFillFormClick = () => ({
  type: ContactActionTypes.TOGGLE_TYPE_FILL_FORM_CLICK,
});
export const toggleTypeSubmitFormClick = () => ({
  type: ContactActionTypes.TOGGLE_TYPE_SUBMIT_FORM_CLICK,
});
