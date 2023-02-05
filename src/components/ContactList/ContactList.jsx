import { Contact } from '../Contact';
import { List } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <Contact key={item.id} item={item} onDelete={onDelete} />
      ))}
    </List>
  );
};
