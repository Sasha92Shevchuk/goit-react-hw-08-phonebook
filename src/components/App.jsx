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
    name: '',
    number: '',
  };
  // handleNameChange = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };
  // handleAddContact = contact => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, { contact }],
  //   }));
  // };
  handleInputFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });

    console.log(e.currentTarget.value);
  };

  addContacts = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      name: prevState.name + ' ' + name,
      number: prevState.number + ' ' + number,
    }));
  };

  render() {
    return (
      <div style={{ marginLeft: 20 }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        {/* <label>
          Find contacs by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.handleInputFilterChange}
          />
        </label> */}
        <Filter
          value={this.state.filter}
          onChange={this.handleInputFilterChange}
        />
        <ContactList items={this.state.contacts} />
      </div>
    );
  }
}
