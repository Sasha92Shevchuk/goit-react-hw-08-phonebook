import { Button } from '../Button.styled';
import { Item } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={handleDelete}>
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
};
