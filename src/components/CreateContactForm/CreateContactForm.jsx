import { useDispatch, useSelector } from 'react-redux';
import { createContactOperation } from '../../redux/operations';
import { selectContacts } from '../../redux/selectores';
import notifix from 'notiflix';

notifix.Notify.init({
  cssAnimationStyle: 'zoom',
  clickToClose: true,
  width: '300px',
});

const CreateContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    if (name === '') {
      notifix.Notify.failure('Please enter name of contact');
      return;
    }
    if (
      contacts.some(
        contact =>
          contact.name.trim().toLowerCase() === name.trim().toLowerCase()
      )
    ) {
      notifix.Notify.failure('This contact is already exists');
      return;
    }
    dispatch(createContactOperation({ name, phone }));
    e.target.reset();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="name" id="name" placeholder="name" />
      <input type="text" name="phone" id="phone" placeholder="phone" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateContactForm;
