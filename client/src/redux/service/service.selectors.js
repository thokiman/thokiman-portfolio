import { createSelector } from "reselect";

const selectAllService = (state) => state.service.service;

export const selectArtService = createSelector(
  [selectAllService],
  (service) => service.art
);
export const selectPhotoService = createSelector(
  [selectAllService],
  (service) => service.photo
);
export const selectEngineerService = createSelector(
  [selectAllService],
  (service) => service.engineer
);
export const selectFullstackService = createSelector(
  [selectAllService],
  (service) => service.fullstack
);

export const selectServiceRoute = createSelector(
  [selectAllService],
  (service) => service.routeName
);
