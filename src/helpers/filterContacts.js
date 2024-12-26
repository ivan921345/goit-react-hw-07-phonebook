const filterContacts = (contacts, contactToDeleteId) => {
  return contacts.filter(({ id }) => id !== contactToDeleteId);
};
export default filterContacts;
