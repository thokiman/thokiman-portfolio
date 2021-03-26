import ContactActionTypes from "./contact.types";
import {
  postFormContactStart,
  postFormContactFailure,
  postFormContactSuccess,
  toggleSubmitButtonClick,
  toggleTypeFillFormClick,
  toggleTypeSubmitFormClick,
} from "./contact.actions";

describe("postFormContactStart action", () => {
  it("should create the postFormContactStart action", () => {
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
    const action = postFormContactStart(mockForm);
    expect(action.type).toEqual(ContactActionTypes.POST_FORM_CONTACT_START);
    expect(action.payload).toEqual(mockForm);
  });
});

describe("postFormContactSuccess action", () => {
  it("should create the postFormContactSuccess action", () => {
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
    const action = postFormContactSuccess(mockForm);
    expect(action.type).toEqual(ContactActionTypes.POST_FORM_CONTACT_SUCCESS);
    expect(action.payload).toEqual(mockForm);
  });
});

describe("postFormContactFailure action", () => {
  it("should create the postFormContactFailure action", () => {
    const mockError = null;
    const action = postFormContactFailure(mockError);
    expect(action.type).toEqual(ContactActionTypes.POST_FORM_CONTACT_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("toggleSubmitButtonClick action", () => {
  it("should create the toggleSubmitButtonClick action", () => {
    expect(toggleSubmitButtonClick().type).toEqual(
      ContactActionTypes.TOGGLE_SUBMIT_BUTTON_FORM_CLICK
    );
  });
});

describe("toggleTypeFillFormClick action", () => {
  it("should create the toggleTypeFillFormClick action", () => {
    expect(toggleTypeFillFormClick().type).toEqual(
      ContactActionTypes.TOGGLE_TYPE_FILL_FORM_CLICK
    );
  });
});

describe("toggleTypeSubmitFormClick action", () => {
  it("should create the toggleTypeSubmitFormClick action", () => {
    expect(toggleTypeSubmitFormClick().type).toEqual(
      ContactActionTypes.TOGGLE_TYPE_SUBMIT_FORM_CLICK
    );
  });
});
