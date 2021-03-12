import { all } from "redux-saga/effects";

import { onCollectionListWatcherSaga } from "./collection/collection.sagas";

export default function* rootSaga() {
  yield all([onCollectionListWatcherSaga()]);
}
