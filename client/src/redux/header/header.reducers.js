import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  isSideBarActive: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.IS_SIDEBAR_ACTIVE:
      return {
        ...state,
        isSideBarActive: !state.isSideBarActive,
      };
    default:
      return state;
  }
};

export default headerReducer;
