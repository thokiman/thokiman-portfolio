import HeaderActionTypes from './header.types';

const INITIAL_STATE = {
  isSideBarActive: false,
  isHeaderMorphingActive: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.IS_SIDEBAR_ACTIVE:
      return {
        ...state,
        isSideBarActive: !state.isSideBarActive,
      };
    case HeaderActionTypes.IS_HEADER_MORPHING_ACTIVE:
      return {
        ...state,
        isHeaderMorphingActive: action.payload,
      };

    default:
      return state;
  }
};

export default headerReducer;
