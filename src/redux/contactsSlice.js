import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactItems = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactItems.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contactItems.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contactItems.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
  // reducers: {
  //   // start of HTTP-request
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   // successful HTTP-request
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contactItems = action.payload;
  //   },
  //   // failed HTTP-request
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//     },
//     deleteContact: {
//       reducer(state, action) {
//         const index = state.findIndex(task => task.id === action.payload);
//         state.splice(index, 1);
//       },
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
