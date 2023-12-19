import { createSelector } from '@reduxjs/toolkit';

const selectContactsState = state => state.contacts;

export const selectContacts = createSelector(
  [selectContactsState],
  contacts => contacts.contacts
);

export const sortedContacts = createSelector(
  [selectContacts],
  contacts => contacts && contacts.slice().toSorted((a, b) => b.id - a.id)
);

export const isLoadingContacts = createSelector(
  [selectContactsState],
  contacts => contacts.isLoading
);

export const errorContacts = createSelector(
  [selectContactsState],
  contacts => contacts.error
);

export const contactsSelectors = {
  selectContacts,
  sortedContacts,
  isLoadingContacts,
  errorContacts,
};
