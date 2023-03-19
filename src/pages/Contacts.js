import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Filter } from 'components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
