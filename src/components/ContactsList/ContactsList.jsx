import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsOperation } from '../../redux/operations';
import { selectFiltredContacts } from '../../redux/selectores';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFiltredContacts);
  useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(filteredContact => (
        <ContactsListItem key={filteredContact.id} contact={filteredContact} />
      ))}
    </ul>
  );
};

export default ContactsList;
