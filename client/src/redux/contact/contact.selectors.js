import { createSelector } from 'reselect';

const selectContact = (state) => state.contact;
const selectAllContact = (state) => state.contact.contact;
const selectAllOther = (state) => state.contact.other;

export const selectIsTypeClickContact = createSelector(
  [selectContact],
  (contact) => contact.isTypeClick
);
export const selectIsButtonClickContact = createSelector(
  [selectContact],
  (contact) => contact.isButtonClick
);

export const selectTitleContact = createSelector(
  [selectAllContact],
  (contact) => contact.title
);

export const selectContactRoute = createSelector(
  [selectAllContact],
  (contact) => contact.routeName
);
export const selectInfoContact = createSelector(
  [selectAllContact],
  (contact) => contact.info
);

export const selectItemsContact = createSelector(
  [selectAllContact],
  (contact) => contact.items
);

export const selectSocialIconContact = createSelector(
  [selectAllContact],
  (contact) => contact.items.socialIcon
);

export const selectLowWaveImage = createSelector(
  [selectAllOther],
  (other) => other.layout.items.lowWave
);
