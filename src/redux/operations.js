import {
  fetchContactsSuccess,
  fetchContactsPending,
  fetchContactsError,
  createContactPending,
  createContactSuccess,
  createContactError,
  deleteContactPending,
  deleteContactSuccess,
  deleteContactError,
} from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://676ac003863eaa5ac0df81d8.mockapi.io';

export const fetchContactsOperation = () => async dispatch => {
  try {
    dispatch(fetchContactsPending());
    const resp = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(resp.data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const createContactOperation = data => async dispatch => {
  try {
    dispatch(createContactPending());
    const resp = axios.post('/contacts', data);
    const createdContact = (await resp).data;
    console.log(createdContact);
    dispatch(createContactSuccess(createdContact));
  } catch (error) {
    dispatch(createContactError());
  }
};

export const deleteContactOperation = contactId => async dispatch => {
  try {
    dispatch(deleteContactPending());
    const resp = axios.delete(`/contacts/${contactId}`);
    const deletedContact = (await resp).data;
    dispatch(deleteContactSuccess(deletedContact));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
