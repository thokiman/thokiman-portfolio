import ContactActionTypes from "./contact.types";
import contactReducer from "./contact.reducers";
import { contact } from "../../data.object/contact.data";

const initialState = {
  contact,
  isTypeClick: false,
  isButtonClick: false,
  isPosted: false,
  formData: null,
  error: null,
};

describe("contactReducer", () => {
  const mockForm = {
    name: "Thomas",
    email: "santosa.thomas94@gmail.com",
    country: "Indonesia",
    area: "+62",
    phone: "82121448894",
    company: "none",
    type: "engineering",
    message: "wowowowo",
  };

  it("should return initial state", () => {
    expect(contactReducer(undefined, {})).toEqual(initialState);
  });

  it("should create toggle isPosted to true", () => {
    expect(
      contactReducer(initialState, {
        type: ContactActionTypes.POST_FORM_CONTACT_START,
        payload: mockForm,
      }).isPosted
    ).toBe(true);
  });

  it("should post form", () => {
    const mockPreviousState = {
      isPosted: false,
      formData: null,
    };
    expect(
      contactReducer(mockPreviousState, {
        type: ContactActionTypes.POST_FORM_CONTACT_SUCCESS,
        payload: mockForm,
      })
    ).toEqual({
      ...mockPreviousState,
      isPosted: false,
      formData: mockForm,
    });
  });

  it("should load error", () => {
    const mockPreviousState = {
      isPosted: false,
      error: "",
    };
    expect(
      contactReducer(mockPreviousState, {
        type: ContactActionTypes.POST_FORM_CONTACT_FAILURE,
        payload: "",
      })
    ).toEqual({
      ...mockPreviousState,
      isPosted: false,
      error: "",
    });
  });

  it("should create toggle isTypeClick to true", () => {
    expect(
      contactReducer(initialState, {
        type: ContactActionTypes.TOGGLE_TYPE_FILL_FORM_CLICK,
      }).isTypeClick
    ).toBe(true);
  });
  it("should create toggle isButtonClick to true", () => {
    expect(
      contactReducer(initialState, {
        type: ContactActionTypes.TOGGLE_SUBMIT_BUTTON_FORM_CLICK,
      }).isButtonClick
    ).toBe(true);
  });
  it("should create toggle isButtonClick to false", () => {
    expect(
      contactReducer(initialState, {
        type: ContactActionTypes.TOGGLE_TYPE_SUBMIT_FORM_CLICK,
      }).isButtonClick
    ).toBe(false);
  });
});
