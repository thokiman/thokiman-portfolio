import { createSelector } from "reselect";
const selectHeader = (state) => state.header;

export const selectIsSideBarHidden = createSelector(
  [selectHeader],
  (header) => header.isSideBarHidden
);
