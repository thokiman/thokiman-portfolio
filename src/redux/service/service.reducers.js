import { service } from "../../data.object/service.data";

const INITIAL_STATE = {
  service,
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default serviceReducer;
