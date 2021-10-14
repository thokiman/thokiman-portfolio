import HeaderActionTypes from './header.types';

export const toggleSideBarActive = () => ({
  type: HeaderActionTypes.IS_SIDEBAR_ACTIVE,
});

export const toggleHeaderMorphingActive = (isActivated) => ({
  type: HeaderActionTypes.IS_HEADER_MORPHING_ACTIVE,
  payload: isActivated,
});
