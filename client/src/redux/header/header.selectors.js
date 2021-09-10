import { createSelector } from 'reselect';
const selectHeader = (state) => state.header;

export const selectIsSideBarActive = createSelector(
  [selectHeader],
  (header) => header.isSideBarActive
);
