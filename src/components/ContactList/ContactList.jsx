import { Contact } from '../Contact';

export const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Contact key={item.id} item={item} />
      ))}
    </ul>
  );
};
