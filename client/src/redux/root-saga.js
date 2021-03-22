import { all, call } from "redux-saga/effects";
import { contactSagas } from "./contact/contact.sagas";
import { collectionSagas } from "./collection/collection.sagas";

export default function* rootSaga() {
  yield all([call(collectionSagas), call(contactSagas)]);
}
