import React from 'react';
import { FcConferenceCall, FcPhoneAndroid, FcCancel } from 'react-icons/fc';
import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import {
  ContactListTable,
  ContactListTbody,
  ContactListThead,
  ErrorRequest,
} from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ContactListTable>
      <ContactListThead>
        <tr>
          <th>
            {isLoading && !error && <Loader />}
            {!isLoading && contacts.length !== 0 && (
              <FcConferenceCall size={40} />
            )}
            {error && <FcCancel size={40} />}
          </th>
          <th>
            {isLoading && !error && <Loader />}
            {!isLoading && contacts.length !== 0 && (
              <FcPhoneAndroid size={40} />
            )}
            {error && contacts.length === 0 && (
              <ErrorRequest>Error! Try again!</ErrorRequest>
            )}
          </th>
        </tr>
      </ContactListThead>
      <ContactListTbody>
        {visibleContacts.map(contact => (
          <tr key={contact.id}>
            <ContactItem contact={contact} />
          </tr>
        ))}
      </ContactListTbody>
    </ContactListTable>
  );
};

export default ContactList;
