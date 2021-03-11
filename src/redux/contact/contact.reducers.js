import { contact } from "../../data.object/contact.data";
import ContactActionTypes from "./contact.types";

const INITIAL_STATE = {
  contact,
  isTypeClick: false,
  isButtonClick: false,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
