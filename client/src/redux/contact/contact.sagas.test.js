import { all, call, put, takeLatest } from "redux-saga/effects";

import ContactActionTypes from "./contact.types";
import { postFormContactSuccess } from "./contact.actions";

import { firestore } from "../../utils/firebase/firebase.utils";
import { postFormContact, onPostContactForm } from "./contact.sagas";

describe("on post contact form", () => {
  it("should trigger on POST_FORM_CONTACT_START", () => {
    const generator = onPostContactForm();
    expect(generator.next().value).toEqual(
      takeLatest(ContactActionTypes.POST_FORM_CONTACT_START, postFormContact)
    );
  });
});

describe("post form success", () => {
  const mockForm = {
    payload: {
      name: "Thomas",
      email: "santosa.thomas94@gmail.com",
      country: "Indonesia",
      area: "+62",
      phone: "82121448894",
      company: "none",
      type: "engineering",
      message: "wowowowo",
    },
  };

  const generator = postFormContact(mockForm);

  it("should call collectionRef", () => {
    const collectionRef = jest.spyOn(firestore, "collection");
    generator.next();
    expect(collectionRef).toHaveBeenCalled();
  });
});
