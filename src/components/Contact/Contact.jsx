import { Button } from '../Button.styled';
import { Item } from './Contact';

export const Contact = ({ item: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};
