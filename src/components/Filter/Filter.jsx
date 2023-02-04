export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacs by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
