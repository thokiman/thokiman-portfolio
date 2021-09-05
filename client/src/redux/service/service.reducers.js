import { other } from "../../data.object/other.data";
import { service } from "../../data.object/service.data";

const INITIAL_STATE = {
  service,
  other
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default serviceReducer;
