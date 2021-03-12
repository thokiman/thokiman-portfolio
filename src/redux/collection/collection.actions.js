import CollectionActionTypes from "./collection.types";

export const loadCollectionList = (items, initialPageNumber, pageSize) => ({
  type: CollectionActionTypes.FETCH_COLLECTION_LIST,
  payload: { items, initialPageNumber, pageSize },
});

export const loadCollectionListSuccess = (getItems) => ({
  type: CollectionActionTypes.FETCH_COLLECTION_LIST_SUCCESS,
  payload: getItems,
});

export const loadMoreCollection = (items, nextPageNumber, pageSize) => ({
  type: CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION,
  payload: { items, nextPageNumber, pageSize },
});

export const loadMoreCollectionSuccess = (loadItems) => ({
  type: CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION_SUCCESS,
  payload: loadItems,
});

export const loadCollectionListFinished = () => ({
  type: CollectionActionTypes.FETCH_COLLECTION_LIST_FINISHED,
});
