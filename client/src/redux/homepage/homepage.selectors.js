import { createSelector } from 'reselect';

const selectAllHomepage = (state) => state.homepage;

export const selectHomepageRoute = createSelector(
  [selectAllHomepage],
  (homepage) => homepage.homepageRoute
);
export const selectRockWaveImage = createSelector(
  [selectAllHomepage],
  (homepage) => homepage.other.layout.items.rockWave
);
