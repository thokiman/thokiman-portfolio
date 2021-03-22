export const paginateItems = (array, pageNumber, pageSize) => {
  const startSlice = (pageNumber - 1) * pageSize;
  const endSlice = pageNumber * pageSize;
  return array.slice(startSlice, endSlice);
};

export const getCollectionList = (items, inititalPageNumber, pageSize) =>
  paginateItems(items, inititalPageNumber, pageSize);

export const loadMoreCollectionList = (items, nextPageNumber, pageSize) =>
  paginateItems(items, nextPageNumber, pageSize);
