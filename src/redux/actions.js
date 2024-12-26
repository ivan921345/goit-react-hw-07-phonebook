import { createAction } from '@reduxjs/toolkit';

export const fetchContactsSuccess = createAction(
  'contacts/FetchContacts/success'
);

export const fetchContactsPending = createAction(
  'contacts/FetchContacts/pending'
);

export const fetchContactsError = createAction(
  'contacts/FetchContacts/rejected'
);

export const createContactPending = createAction(
  'contacts/CreateContact/pending'
);

export const createContactSuccess = createAction(
  'contacts/CreateContact/success'
);

export const createContactError = createAction(
  'contacts/CreateContact/rejected'
);

export const deleteContactPending = createAction(
  'contacts/DeleteContact/pending'
);

export const deleteContactSuccess = createAction(
  'contacts/DeleteContact/success'
);

export const deleteContactError = createAction(
  'contacts/DeleteContact/rejected'
);

export const changeFilter = createAction('filter/FilterChange');
