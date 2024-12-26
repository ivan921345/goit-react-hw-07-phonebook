import ContactsList from 'components/ContactsList/ContactsList';
import CreateContactForm from 'components/CreateContactForm/CreateContactForm';
import Filter from './Filter/Filter';
export const App = () => {
  return (
    <div>
      <CreateContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};
