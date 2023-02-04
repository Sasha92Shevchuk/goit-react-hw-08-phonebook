import { Contact } from '../Contact';

export const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Contact key={item.id} item={item} />

        // (
        //   <li key={item.id}>
        //     <span>{item.name}: </span>
        //     <span>{item.number}</span>
        //   </li>
        // )
      ))}
    </ul>
  );
};
