import React from 'react';
import { Form, Label, Submit } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectFilterContacts, selectIsLoading } from 'redux/selectors';
import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const existingContacts = useSelector(selectFilterContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    if (name.value === '') {
      toast.error('Please, enter name');
    }
    if (number.value.length < 12 || number.value.length > 12) {
      toast.warning('The number must consist of 12 digits');
      return;
    }

    if (existingContacts.some(contact => contact.name === name.value)) {
      toast.warning('Contact with that name already exists');
      return;
    }
    if (existingContacts.some(contact => contact.number === number.value)) {
      toast.warning('Contact with that number already exists');
      return;
    }
    dispatch(addContact({ name: name.value, number: number.value }));
    toast.success(`Contact "${name.value.toUpperCase()}" has been added`);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Submit type="submit" disabled={loading}>
        <FaCheckCircle size={24} />
      </Submit>
    </Form>
  );
}
