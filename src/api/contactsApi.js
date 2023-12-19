import axios from 'axios';

const API_ENDPOINT = 'https://657cd5f6853beeefdb9a0768.mockapi.io/contacts';

export const fetchAllContacts = async () => {
  const response = await axios.get(API_ENDPOINT);
  return response.data;
};

export const addNewContact = async contact => {
  const response = await axios.post(API_ENDPOINT, contact);
  // console.log(response);
  // console.log(contact);
  return response.data;
};

export const deleteContactById = async id => {
  await axios.delete(`${API_ENDPOINT}/${id}`);
  return id;
};
