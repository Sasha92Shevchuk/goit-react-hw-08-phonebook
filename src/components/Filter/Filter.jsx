import { FilterBox } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <label htmlFor="filter">Find contacs by name</label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
