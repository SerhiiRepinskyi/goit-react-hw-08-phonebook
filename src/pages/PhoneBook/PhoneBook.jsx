import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { selectItems, selectIsLoading, selectError } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Title,
  Subtitle,
  AmountContacts,
  ContactsNum,
  Message,
} from './PhoneBook.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems); // Отримуємо всі контакти зі стейта Store
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>
      <AmountContacts>
        All contacts in the phonebook:{' '}
        <ContactsNum>{contacts.length}</ContactsNum>
      </AmountContacts>

      {isLoading && !error && <b>Request in progress...</b>}
      {error && error}

      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Message>Contact list is empty</Message>
      )}

      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </Container>
  );
};

export default Contacts;
