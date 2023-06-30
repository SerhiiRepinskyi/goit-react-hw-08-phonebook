import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { FaUser, FaPhone } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { ContactsList, ContactItem, Span, Btn } from './ContactList.styled';

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
          <Span>
            <FaUser color="#c8e9e3" /> {name}:
          </Span>
          <Span>
            <FaPhone color="#c8e9e3" /> {number}
          </Span>
          <Btn type="button" onClick={() => handleDeleteContact(id)}>
            <AiFillDelete />
            Delete
          </Btn>
        </ContactItem>
      ))}

      {!filteredContacts?.length && <div>No contacts found.</div>}
    </ContactsList>
  );
};

export default ContactList;
