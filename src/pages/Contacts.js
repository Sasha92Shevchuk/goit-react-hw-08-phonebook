import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Filter } from 'components/Filter';
import {
  BtnAddContact,
  ContactNav,
  Title,
  Wrapper,
} from 'components/CommonStyles/CommonStyles';
import Loader from 'components/Loader/Loader';
import { AiOutlineUserAdd } from 'react-icons/ai';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showAddForm, setShowAddForm] = useState(false);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleToogleForm = () => {
    setShowAddForm(prevState => !prevState);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Title>Contacts</Title>
      <ContactNav>
        <Filter />
        <BtnAddContact onClick={handleToogleForm}>
          <AiOutlineUserAdd size={32} />
        </BtnAddContact>
        {showAddForm && <ContactForm />}
      </ContactNav>
      {isLoading ? <Loader /> : <ContactList />}
    </Wrapper>
  );
}
