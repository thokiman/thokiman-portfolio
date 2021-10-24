import { createSelector } from 'reselect';

const selectAllService = (state) => state.service.service;
const selectAllOther = (state) => state.service.other;

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
export const selectDevService = createSelector(
  [selectAllService],
  (service) => service.fullstack
);

export const selectServiceRoute = createSelector(
  [selectAllService],
  (service) => service.routeName
);
export const selectEngineerServiceRoute = createSelector(
  [selectAllService],
  (service) => service.engineer.routeName
);

export const selectArtServiceRoute = createSelector(
  [selectAllService],
  (service) => service.art.routeName
);

export const selectPhotoServiceRoute = createSelector(
  [selectAllService],
  (service) => service.photo.routeName
);

export const selectDevServiceRoute = createSelector(
  [selectAllService],
  (service) => service.fullstack.routeName
);

export const selectBigWaveImage = createSelector(
  [selectAllOther],
  (other) => other.layout.items.bigWave
);
