import { Box, BtnDelete, BtnEdit, Image, Item } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { toast } from 'react-toastify';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Outlet, useNavigate } from 'react-router-dom';

export const Contact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  const handleEdit = editId => {
    navigate(`/contacts/edit/${editId}`);
  };
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success(`Contact "${name.toUpperCase()}" has been deleted`);
  };

  return (
    <>
      <Item>
        <Image
          src={`https://ui-avatars.com/api/?name=${name}&background=random&size=60&rounded=true`}
          alt={name}
        />
        <Box>
          <span>{name} </span>
          <span> Mobile: {number}</span>
        </Box>
        <BtnEdit
          type="button"
          disabled={loading}
          onClick={() => handleEdit(id)}
        >
          <RiEdit2Line size={24} />
        </BtnEdit>

        <BtnDelete type="button" onClick={handleDelete} disabled={loading}>
          <RiDeleteBinLine size={24} />
        </BtnDelete>
      </Item>
      <Outlet />
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
