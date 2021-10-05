import { collection } from '../../data.object/collection.data';
import CollectionActionTypes from './collection.types';

const INITIAL_STATE = {
  collection,
  collectionList: [],
  isLoadingCollection: false,
  isWebsiteLinkDropdownActive: false,
  currentWebsitePathname: collection.website.routeName,
  websiteItemsSlider: [],
  isLoadingWebsiteItemsSlider: true,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.FETCH_COLLECTION_LIST:
      return {
        ...state,
        isLoadingCollection: true,
      };
    case CollectionActionTypes.FETCH_COLLECTION_LIST_SUCCESS:
      return {
        ...state,
        collectionList: action.payload,
        isLoadingCollection: false,
      };
    case CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION:
      return {
        ...state,
        isLoadingCollection: true,
      };
    case CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION_SUCCESS:
      return {
        ...state,
        collectionList: [...state.collectionList, ...action.payload],
        isLoadingCollection: false,
      };
    case CollectionActionTypes.FETCH_COLLECTION_LIST_FINISHED:
      return {
        ...state,
        isLoadingCollection: false,
      };
    case CollectionActionTypes.TOGGLE_WEBSITE_LINK_DROPDOWN:
      return {
        ...state,
        isWebsiteLinkDropdownActive: !state.isWebsiteLinkDropdownActive,
      };
    case CollectionActionTypes.SET_CURRENT_WEBSITE_PATHNAME:
      return {
        ...state,
        currentWebsitePathname: action.payload,
      };

    default:
      return state;
  }
};

export default collectionReducer;
