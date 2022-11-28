import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { PageTitle, ContactsTitle } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Box } from '../Box/Box.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      pt={5}
      pl={7}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-around"
      gridGap={4}
    >
      <PageTitle>Phonebook</PageTitle>
      <Box
        display="inline-flex"
        alignItems="flex-start"
        justifyContent="space-around"
        gridGap="200px"
      >
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <ContactForm />
        </Box>
        <Box>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactList />
        </Box>
      </Box>
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

export default App;
