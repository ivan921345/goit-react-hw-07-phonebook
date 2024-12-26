import { useDispatch } from 'react-redux';
import { deleteContactOperation } from '../../redux/operations';
const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteButtonClick = async e => {
    e.target.disabled = true;
    dispatch(deleteContactOperation(contact.id));
  };
  return (
    <li>
      <p>Created at: {contact.createdAt}</p>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={handleDeleteButtonClick} type="button">
        Delete contact
      </button>
    </li>
  );
};

export default ContactsListItem;
