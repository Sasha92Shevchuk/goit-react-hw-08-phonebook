import { Box, BtnDelete, Image, Item } from './Contact.styled';
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
      <Image
        src={`https://ui-avatars.com/api/?name=${name}&background=random&size=60&rounded=true`}
        alt={name}
      />
      <Box>
        <span>{name} </span>
        <span> Mobile: {number}</span>
      </Box>
      <BtnDelete type="button" onClick={handleDelete}>
        Delete
      </BtnDelete>
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
