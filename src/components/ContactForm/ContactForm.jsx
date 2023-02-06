import { Component } from 'react';
import { Form } from './ContactForm.styled';
import { Button } from '../Button.styled';
import PropTypes from 'prop-types';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContactInfo = (name, number) => {
    this.setState(prevState => ({
      name: prevState.name + ' ' + name,
      number: prevState.number + ' ' + number,
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const { onSubmit } = this.props;
    onSubmit(name.value, number.value);
    this.addContactInfo(name.value, number.value);
    this.setState({
      name: '',
      number: '',
    });
  };
  // handleNameChange = e => {
  //   this.setState({
  //     name: e.currentTarget.value,
  //   });
  // };
  // handleNumberChange = e => {
  //   this.setState({
  //     number: e.currentTarget.value,
  //   });
  // };
  //  замість двох методів використовуємо один handleInputChange
  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
