import { createSelector } from 'reselect';

const selectAllHomepage = (state) => state.homepage;

export const selectRockWaveImage = createSelector(
  [selectAllHomepage],
  (homepage) => homepage.other.layout.items.rockWave
);
