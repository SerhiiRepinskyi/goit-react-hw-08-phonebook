import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import {
  deleteContact,
  updateContact,
} from '../../redux/contacts/contactsOperations';
import Modal from '../Modal';
import { FaUser, FaPhone } from 'react-icons/fa';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {
  ContactsList,
  ContactItem,
  Span,
  WrapBtn,
  Btn,
  ModalTitle,
  ModalForm,
  ModalLabel,
  ModalInput,
  WrapModalBtn,
  ModalBtn,
} from './ContactList.styled';

const ContactList = () => {
  // Записуємо в стейт контакт (subName, subNumber, subId) для редагування
  const [subName, setSubName] = useState('');
  const [subNumber, setSubNumber] = useState('');
  const [subId, setSubId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  // Відкрити модалку з контактом для редагування
  const showModal = (name, number, id) => {
    setSubNumber(number);
    setSubName(name);
    setSubId(id);
    setIsModalOpen(true);
  };

  // Відправити редагований контакт на бекенд і закрити модалку
  const handleSave = () => {
    setIsModalOpen(false);
    dispatch(updateContact({ id: subId, name: subName, number: subNumber }));
  };

  // Закрити модалку
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <Span>
              <FaUser color="#c8e9e3" /> {name}:
            </Span>
            <Span>
              <FaPhone color="#c8e9e3" /> {number}
            </Span>
            <WrapBtn>
              <Btn type="button" onClick={() => showModal(name, number, id)}>
                <AiFillEdit />
                Edit
              </Btn>
              <Btn type="button" onClick={() => handleDeleteContact(id)}>
                <AiFillDelete />
                Delete
              </Btn>
            </WrapBtn>
          </ContactItem>
        ))}

        {!filteredContacts?.length && <div>No contacts found.</div>}
      </ContactsList>

      {/* Модальне вікно для редагування контакту */}
      {isModalOpen && (
        <Modal onClose={handleCancel}>
          <ModalTitle>Edit this contact</ModalTitle>
          <ModalForm>
            <ModalLabel>
              Name:
              <ModalInput
                type="text"
                name="name"
                value={subName}
                onChange={e => {
                  setSubName(e.target.value);
                }}
              />
            </ModalLabel>
            <ModalLabel>
              Number:
              <ModalInput
                type="tel"
                name="number"
                value={subNumber}
                onChange={e => {
                  setSubNumber(e.target.value);
                }}
              />
            </ModalLabel>
            <WrapModalBtn>
              <ModalBtn type="button" onClick={handleSave}>
                Save
              </ModalBtn>
              <ModalBtn type="button" onClick={handleCancel}>
                Cancel
              </ModalBtn>
            </WrapModalBtn>
          </ModalForm>
        </Modal>
      )}
    </>
  );
};

export default ContactList;
