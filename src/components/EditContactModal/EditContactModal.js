import { Submit } from 'components/LoginForm/LoginForm.styled';

import { useNavigate, useParams } from 'react-router-dom';
import {
  BtnCloseModal,
  FormModal,
  LabelModal,
  Modal,
  Overlay,
} from './EditContactModal.styled';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useState } from 'react';

export const EditContactModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { contactId } = useParams();
  const contacts = useSelector(selectContacts);
  //   const contactById = contacts
  //     .filter(contact => contact.id === contactId)
  //     .shift();
  const contactById = contacts.find(contact => contact.id === contactId);
  const [name, setName] = useState(contactById.name);
  const [number, setNumber] = useState(contactById.number);
  const handleUpdateContact = e => {
    e.preventDefault();
    dispatch(updateContact({ contactId, name: name, number: number }));
    closeModal();
  };
  const closeModal = () => navigate('/contacts');
  return (
    <Overlay onClick={closeModal}>
      <Modal onClick={e => e.stopPropagation()}>
        <FormModal onSubmit={handleUpdateContact}>
          <LabelModal>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </LabelModal>

          <LabelModal>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </LabelModal>

          <Submit type="submit">Update</Submit>
        </FormModal>

        <BtnCloseModal type="button" onClick={closeModal}>
          <MdClose size={24} />
        </BtnCloseModal>
      </Modal>
    </Overlay>
  );
};
