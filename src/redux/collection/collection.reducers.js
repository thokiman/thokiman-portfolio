import { collection } from "../../data.object/collection.data";
import CollectionActionTypes from "./collection.types";

const INITIAL_STATE = {
  collection,
  collectionList: [],
  isLoading: false,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.FETCH_COLLECTION_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case CollectionActionTypes.FETCH_COLLECTION_LIST_SUCCESS:
      console.log("fetch colList success", action.payload);
      return {
        ...state,
        collectionList: action.payload,
        isLoading: false,
      };
    case CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION:
      return {
        ...state,
        isLoading: true,
      };
    case CollectionActionTypes.FETCH_LOAD_MORE_COLLECTION_SUCCESS:
      return {
        ...state,
        collectionList: [...state.collectionList, ...action.payload],
        isLoading: false,
      };
    case CollectionActionTypes.FETCH_COLLECTION_LIST_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default collectionReducer;
