import { createSelector } from "reselect";

const selectCollection = (state) => state.collection;
const selectAllCollection = (state) => state.collection.collection;

export const selectIsLoadingCollectionList = createSelector(
  [selectCollection],
  (collection) => collection.isLoading
);

export const selectCollectionList = createSelector(
  [selectCollection],
  (collection) => collection.collectionList
);

export const selectAllItems = createSelector(
  [selectAllCollection],
  (collection) => collection.all.items
);
export const selectPortfolioRoute = createSelector(
  [selectAllCollection],
  (collection) => collection.all.routeName
);

export const selectBrandItems = createSelector(
  [selectAllCollection],
  (collection) => collection.brand.items
);

export const selectBrandRoute = createSelector(
  [selectAllCollection],
  (collection) => collection.brand.routeName
);

export const selectBrandTitle = createSelector(
  [selectAllCollection],
  (collection) => collection.brand.title
);

export const selectDigitalArtItems = createSelector(
  [selectAllCollection],
  (collection) => collection.digitalArt.items
);

export const selectDigitalArtRoute = createSelector(
  [selectAllCollection],
  (collection) => collection.digitalArt.routeName
);

export const selectDigitalArtTitle = createSelector(
  [selectAllCollection],
  (collection) => collection.digitalArt.title
);

export const selectPhotographyBwItems = createSelector(
  [selectAllCollection],
  (collection) => collection.photography.items.bw.bwItems
);

export const selectPhotographyBwRoute = createSelector(
  [selectAllCollection],
  (collection) => collection.photography.items.bw.routeName
);

export const selectPhotographyBwTitle = createSelector(
  [selectAllCollection],
  (collection) => collection.photography.items.bw.title
);

export const selectPhotographyColorItems = createSelector(
  [selectAllCollection],
  (collection) => collection.photography.items.color.colorItems
);

export const selectPhotographyColorRoute = createSelector(
  [selectAllCollection],
  (collection) => collection.photography.items.color.routeName
);

export const selectPhotographyColorTitle = createSelector(
  [selectAllCollection],
  (collection) => collection.photography.items.color.title
);
