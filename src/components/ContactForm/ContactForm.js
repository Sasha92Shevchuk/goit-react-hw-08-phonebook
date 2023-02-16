import React, { useState } from 'react';
import { Form } from './ContactForm.styled';
import { Button } from '../Button.styled';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleInputChange = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : setNumber(e.target.value);
    // if (e.target.name === 'name') {
    //   setName(e.target.value);
    // }
    // if (e.target.name === 'number') {
    //   setNumber(e.target.value);
    // }
  };
  const addContactInfo = (name, number) => {
    setName(prevState => prevState + ' ' + name);
    setNumber(prevState => prevState + ' ' + number);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    onSubmit(name.value, number.value);
    addContactInfo(name.value, number.value);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputChange}
      />

      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputChange}
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
