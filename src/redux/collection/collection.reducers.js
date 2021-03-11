import { collection } from "../../data.object/collection.data";

const INITIAL_STATE = {
  collection,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
