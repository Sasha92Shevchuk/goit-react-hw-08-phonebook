import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const filterContact = (contacts, query) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(query));
};

export const ContactList = () => {
  const contactsObj = useSelector(getContacts);
  const contactsArr = contactsObj.contacts;
  const filter = useSelector(getFilter);
  const filteredContacts = filterContact(contactsArr, filter);

  return (
    <List>
      {filteredContacts.map(item => (
        <Contact key={item.id} item={item} />
      ))}
    </List>
  );
};
