import React from 'react';
import { FcConferenceCall, FcPhoneAndroid } from 'react-icons/fc';
import { useSelector } from 'react-redux';

import {
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
} from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ContactListTable>
      <ContactListThead>
        <tr>
          <th>
            {isLoading && !error && <Loader />}
            {!isLoading && <FcConferenceCall size={40} />}
          </th>
          <th>
            {isLoading && !error && <Loader />}
            {!isLoading && <FcPhoneAndroid size={40} />}
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
