import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  filterContact = (contacts, query) => {
    return contacts.filter(
      contact => contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };
  handleInputFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContacts = (name, number) => {
    const { contacts } = this.state;
    contacts.find(contact => contact.name === name) ||
    contacts.find(contact => contact.number === number)
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.filterContact(
      this.state.contacts,
      this.state.filter
    );

    return (
      <div style={{ marginLeft: 20 }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.handleInputFilterChange}
        />
        <ContactList items={filteredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
