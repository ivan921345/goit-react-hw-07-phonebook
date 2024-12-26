import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactsSuccess,
  fetchContactsPending,
  fetchContactsError,
  createContactPending,
  createContactSuccess,
  createContactError,
  changeFilter,
  deleteContactPending,
  deleteContactSuccess,
  deleteContactError,
} from './actions';

import filterContacts from 'helpers/filterContacts';

const contactsReducer = createReducer(
  {
    items: [],
    isLoading: false,
    error: null,
  },
  builder => {
    builder
      .addCase(fetchContactsPending, state => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(fetchContactsSuccess, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [...action.payload],
          error: null,
        };
      })
      .addCase(fetchContactsError, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(createContactPending, state => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(createContactSuccess, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [...state.items, action.payload],
        };
      })
      .addCase(createContactError, state => {
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(deleteContactPending, state => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(deleteContactSuccess, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [...filterContacts(state.items, action.payload.id)],
        };
      })
      .addCase(deleteContactError, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      });
  }
);

const filterReducer = createReducer('', builder => {
  builder.addCase(changeFilter, (state, action) => {
    return action.payload;
  });
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
