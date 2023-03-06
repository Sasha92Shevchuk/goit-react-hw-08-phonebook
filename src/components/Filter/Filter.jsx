import { FilterBox } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputFilterChange = e => {
    dispatch(filteredContacts(e.target.value));
  };
  return (
    <FilterBox>
      <label htmlFor="filter">Find contacs by name</label>
      <input type="text" name="filter" onChange={handleInputFilterChange} />
    </FilterBox>
  );
};
