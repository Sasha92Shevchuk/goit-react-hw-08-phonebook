import { Button } from '../Button.styled';
import { Item } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ item: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
