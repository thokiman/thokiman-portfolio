import CollectionActionTypes from './collection.types';

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

export const toggleWebsiteLinkDropdown = () => ({
  type: CollectionActionTypes.TOGGLE_WEBSITE_LINK_DROPDOWN,
});

export const setCurrentWebsitePahtname = (currentPath) => ({
  type: CollectionActionTypes.SET_CURRENT_WEBSITE_PATHNAME,
  payload: currentPath,
});

export const loadWebsiteItemsSlider = (items) => ({
  type: CollectionActionTypes.FETCH_WEBSITE_ITEMS_SLIDER,
  payload: items,
});

export const loadWebsiteItemsSliderFinished = () => ({
  type: CollectionActionTypes.FETCH_WEBSITE_ITEMS_SLIDER_FINISHED,
});
