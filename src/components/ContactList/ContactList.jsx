import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { ContactsList, ContactItem, Btn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <Btn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Btn>
        </ContactItem>
      ))}

      {!filteredContacts?.length && <div>No contacts found.</div>}
    </ContactsList>
  );
};

export default ContactList;
