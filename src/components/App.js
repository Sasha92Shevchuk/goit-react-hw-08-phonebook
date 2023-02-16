import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem(key));
    if (parsedContacts) {
      setState(parsedContacts);
    }
  }, [key]);
  return [state, setState];
};

export const App = () => {
  //   const [contacts, setContacts] = useState(
  //     () => JSON.parse(localStorage.getItem('contacts')) ?? []
  //   );
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  //   useEffect(() => {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);
  //     if (parsedContacts) {
  //       setContacts(parsedContacts);
  //     }
  //   }, []);
  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);

  const filterContact = (contacts, query) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(query)
    );
  };
  const handleInputFilterChange = e => {
    setFilter(e.target.value);
  };
  const addContacts = (name, number) => {
    contacts.find(contact => contact.name === name) ||
    contacts.find(contact => contact.number === number)
      ? alert(`${name} is already in contacts.`)
      : setContacts(prevState => [
          ...prevState,
          { id: nanoid(), name, number },
        ]);
  };
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const filteredContacts = filterContact(contacts, filter);
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleInputFilterChange} />
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </Wrapper>
  );
};
