import { FilterBox } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/filterSlice';
import { Label } from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputFilterChange = e => {
    dispatch(filteredContacts(e.target.value));
  };
  return (
    <FilterBox>
      <Label>
        Find contacs by name
        <input type="text" name="filter" onChange={handleInputFilterChange} />
      </Label>
    </FilterBox>
  );
};
