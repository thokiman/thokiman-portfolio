import HeaderActionTypes from "./header.types";

const INITIAL_STATE = {
  isSideBarHidden: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.IS_SIDEBAR_HIDDEN:
      return {
        ...state,
        isSideBarHidden: !state.isSideBarHidden,
      };
    default:
      return state;
  }
};

export default headerReducer;
