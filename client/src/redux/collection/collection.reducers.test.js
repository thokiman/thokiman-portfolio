import CollectionActionTypes from "./collection.types";
import collectionReducer from "./collection.reducers";
import { collection } from "../../data.object/collection.data";

const initialState = {
  collection,
  collectionList: [],
  isLoading: false,
};

describe("collectionReducer", () => {
  it("should return initial state", () => {
    expect(collectionReducer(undefined, {})).toEqual(initialState);
  });
  it("should load initial collection list", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    const mockInitialPageNumber = 1;
    const mockPageSize = 10;
    const mockPreviousState = {
      collectionList: [],
      isLoading: false,
    };
    expect(
      collectionReducer(mockPreviousState, {
        type: CollectionActionTypes.FETCH_COLLECTION_LIST,
        payload: {
          items: mockItems,
          initialPageNumber: mockInitialPageNumber,
          pageSize: mockPageSize,
        },
      }).collectionList.length
    ).toBe(0);
  });
  it("should load collection list as per initial items", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    const mockPreviousState = {
      collectionList: [],
      isLoading: false,
    };
    expect(
      collectionReducer(mockPreviousState, {
        type: CollectionActionTypes.FETCH_COLLECTION_LIST_SUCCESS,
        payload: mockItems,
      }).collectionList.length
    ).toBe(2);
  });

  it("should load initial more collection list", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    const mockNextPageNumber = 2;
    const mockPageSize = 10;
    const mockPreviousState = {
      collectionList: mockItems,
      isLoading: false,
    };
    expect(
      collectionReducer(mockPreviousState, {
        type: CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION,
        payload: {
          items: mockItems,
          nextPageNumber: mockNextPageNumber,
          pageSize: mockPageSize,
        },
      }).collectionList.length
    ).toBe(2);
  });

  it("should load more collection list as per get more items", () => {
    const mockItems = [{ id: 3 }, { id: 4 }];
    const mockPreviousState = {
      collectionList: [{ id: 1 }, { id: 2 }],
      isLoading: false,
    };
    expect(
      collectionReducer(mockPreviousState, {
        type: CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION_SUCCESS,
        payload: mockItems,
      }).collectionList.length
    ).toBe(4);
  });

  it("should create toggle isLoading false", () => {
    expect(
      collectionReducer(initialState, {
        type: CollectionActionTypes.FETCH_COLLECTION_LIST_FINISHED,
      }).isLoading
    ).toBe(false);
  });
});
