import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilterContacts);

  return (
    <List>
      {filteredContacts.map(item => (
        <Contact key={item.id} item={item} />
      ))}
    </List>
  );
};
