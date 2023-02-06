import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <Contact key={item.id} item={item} onDelete={onDelete} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
