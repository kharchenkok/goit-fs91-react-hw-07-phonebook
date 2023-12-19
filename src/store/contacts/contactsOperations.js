import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContactById,
  fetchAllContacts,
} from '../../api/contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return await fetchAllContacts();
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    // const contactWithId = {
    //   ...contact,
    //   id: nanoid(), // mockApi adds its own id
    // };
    // return await addNewContact(contactWithId);
    return await addNewContact(contact);
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContactById(id);
    return id;
  }
);
