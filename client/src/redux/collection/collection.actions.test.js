import CollectionActionTypes from "./collection.types";
import {
  loadCollectionList,
  loadCollectionListSuccess,
  loadMoreCollection,
  loadMoreCollectionSuccess,
  loadCollectionListFinished,
} from "./collection.actions";

describe("loadCollectionList action", () => {
  it("should create the loadCollectionList action", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    const mockInitialPageNumber = 1;
    const mockPageSize = 10;
    const action = loadCollectionList(
      mockItems,
      mockInitialPageNumber,
      mockPageSize
    );
    expect(action.type).toEqual(CollectionActionTypes.FETCH_COLLECTION_LIST);
    expect(action.payload).toEqual({
      initialPageNumber: mockInitialPageNumber,
      items: mockItems,
      pageSize: mockPageSize,
    });
  });

  it("should create the loadCollectionListSuccess action", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    const action = loadCollectionListSuccess(mockItems);
    expect(action.type).toEqual(
      CollectionActionTypes.FETCH_COLLECTION_LIST_SUCCESS
    );
    expect(action.payload).toEqual(mockItems);
  });

  it("should create the loadMoreCollection action", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    const mockNextPageNumber = 2;
    const mockPageSize = 10;
    const action = loadMoreCollection(
      mockItems,
      mockNextPageNumber,
      mockPageSize
    );
    expect(action.type).toEqual(
      CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION
    );
    expect(action.payload).toEqual({
      items: mockItems,
      nextPageNumber: mockNextPageNumber,
      pageSize: mockPageSize,
    });
  });

  it("should create the loadMoreCollectionSuccess action", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    const action = loadMoreCollectionSuccess(mockItems);
    expect(action.type).toEqual(
      CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION_SUCCESS
    );
    expect(action.payload).toEqual(mockItems);
  });

  it("should create the loadCollectionListFinished action", () => {
    expect(loadCollectionListFinished().type).toEqual(
      CollectionActionTypes.FETCH_COLLECTION_LIST_FINISHED
    );
  });
});
