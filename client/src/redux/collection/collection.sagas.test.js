import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  loadCollectionListSuccess,
  loadMoreCollectionSuccess,
} from "./collection.actions";
import {
  onFetchCollectionList,
  onFetchLoadMoreCollectionList,
  fetchCollectinListSaga,
  loadMoreCollectionListSaga,
} from "./collection.sagas";
import { getCollectionList, loadMoreCollectionList } from "./collection.utils";
import CollectionActionTypes from "./collection.types";

describe("load initial collection list", () => {
  it("should trigger FETCH_COLLECTION_LIST_SUCCESS", () => {
    const mockItems = {
      payload: {
        items: [{ id: 1 }, { id: 2 }],
        initialPageNumber: 1,
        pageSize: 2,
      },
    };
    const generator = onFetchCollectionList();
    expect(generator.next(mockItems).value).toEqual(
      takeLatest(
        CollectionActionTypes.FETCH_COLLECTION_LIST,
        fetchCollectinListSaga
      )
    );
  });
});

describe("fetchCollectinListSaga", () => {
  const mockItems = [{ id: 1 }, { id: 2 }];
  const mockInitialPageNumber = 1;
  const mockPageSize = 2;
  const mockPayload = {
    payload: {
      items: mockItems,
      initialPageNumber: mockInitialPageNumber,
      pageSize: mockPageSize,
    },
  };
  const generator = fetchCollectinListSaga(mockPayload);
  it("should fire getCollectionList", () => {
    expect(generator.next().value).toEqual(
      call(getCollectionList, mockItems, mockInitialPageNumber, mockPageSize)
    );
  });
  it("should fire loadCollectionListSuccess", () => {
    expect(generator.next().value).toEqual(put(loadCollectionListSuccess()));
  });
});

describe("load more collection list", () => {
  it("should trigger FETCH_LOAD_MORE_COLLECTION", () => {
    const mockItems = {
      payload: {
        items: [{ id: 1 }, { id: 2 }],
        nextPageNumber: 1,
        pageSize: 2,
      },
    };
    const generator = onFetchLoadMoreCollectionList();
    expect(generator.next(mockItems).value).toEqual(
      takeEvery(
        CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION,
        loadMoreCollectionListSaga
      )
    );
  });
});

describe("loadMoreCollectionListSaga", () => {
  const mockItems = [{ id: 1 }, { id: 2 }];
  const mockNextPageNumber = 2;
  const mockPageSize = 2;

  const mockPayload = {
    payload: {
      items: mockItems,
      nextPageNumber: mockNextPageNumber,
      pageSize: mockPageSize,
    },
  };
  const generator = loadMoreCollectionListSaga(mockPayload);
  it("should fire loadMoreCollectionList", () => {
    expect(generator.next().value).toEqual(
      call(loadMoreCollectionList, mockItems, mockNextPageNumber, mockPageSize)
    );
  });
  it("should fire loadMoreCollectionSuccess", () => {
    expect(generator.next().value).toEqual(put(loadMoreCollectionSuccess()));
  });
});
