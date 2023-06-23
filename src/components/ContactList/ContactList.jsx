import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsOperations';
import { ContactsList, ContactItem, Btn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id}>
          <span>{name}: </span>
          <span>{phone}</span>
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
