import { FilterBox } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <label htmlFor="filter">Find contacs by name</label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </FilterBox>
  );
};
