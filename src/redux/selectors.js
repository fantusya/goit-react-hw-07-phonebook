import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactItems;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filterValue = selectFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue.toLowerCase())
//   );
// };

// M E M O I Z E D
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
