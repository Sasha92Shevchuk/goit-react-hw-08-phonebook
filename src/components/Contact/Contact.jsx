export const Contact = ({ item: { name, number } }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
    </li>
  );
};
