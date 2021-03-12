import { all, call, put, takeLatest } from "redux-saga/effects";
import * as mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

import ContactActionTypes from "./contact.types";
import {
  postFormContactSuccess,
  postFormContactFailure,
} from "./contact.actions";
import { firestore } from "../../utils/firebase/firebase.utils";

export function* postFormContact(action) {
  const form = action.payload;
  try {
    const collectionRef = yield firestore.collection("users");

    const createdAt = yield new Date();
    form["createdAt"] =
      createdAt.getDate() +
      "/" +
      (createdAt.getMonth() + 1) +
      "/" +
      createdAt.getFullYear() +
      " " +
      createdAt.getHours() +
      ":" +
      createdAt.getMinutes();

    const { id } = yield collectionRef.add(form);

    const documentSnapshot = yield collectionRef.doc(id).get();
    const { message, type } = yield documentSnapshot.data();

    const previousMessageRef = yield collectionRef
      .where("message", "==", `${message}`)
      .where("type", "==", `${type}`)
      .get();
    const previousMessageSnapshot = yield previousMessageRef.docs;

    if (previousMessageSnapshot.length > 1) {
      for (let { id } of previousMessageSnapshot.slice(1)) {
        yield collectionRef.doc(id).delete();
      }
    } else {
      const formData = yield documentSnapshot.data();
      yield put(postFormContactSuccess(formData));
    }
  } catch (e) {
    console.log("Sorry: the message is not sent due to: ", e);
    yield put(postFormContactFailure(e));
  }
}

export function* onPostContactForm() {
  yield takeLatest(ContactActionTypes.POST_FORM_CONTACT_START, postFormContact);
}

export function* contactSagas() {
  yield all([call(onPostContactForm)]);
}
