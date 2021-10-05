import { contact } from '../../data.object/contact.data';
import { other } from '../../data.object/other.data';
import ContactActionTypes from './contact.types';

const INITIAL_STATE = {
  contact,
  other,
  isTypeClick: false,
  isButtonClick: false,
  isPosted: false,
  formData: null,
  error: null,
  isMapBoxLoading: true,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactActionTypes.POST_FORM_CONTACT_START:
      return {
        ...state,
        isPosted: true,
      };
    case ContactActionTypes.POST_FORM_CONTACT_SUCCESS:
      return {
        ...state,
        formData: action.payload,
        isPosted: false,
      };
    case ContactActionTypes.POST_FORM_CONTACT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPosted: false,
      };
    case ContactActionTypes.TOGGLE_SUBMIT_BUTTON_FORM_CLICK:
      return {
        ...state,
        isButtonClick: !state.isButtonClick,
      };
    case ContactActionTypes.TOGGLE_TYPE_FILL_FORM_CLICK:
      return {
        ...state,
        isTypeClick: !state.isTypeClick,
      };
    case ContactActionTypes.TOGGLE_TYPE_SUBMIT_FORM_CLICK:
      return {
        ...state,
        isTypeClick: false,
      };

    default:
      return state;
  }
};

export default contactReducer;
