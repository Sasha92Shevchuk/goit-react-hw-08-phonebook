import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

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
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.handleInputFilterChange}
        />
        <ContactList items={filteredContacts} onDelete={this.deleteContact} />
      </Wrapper>
    );
  }
}
