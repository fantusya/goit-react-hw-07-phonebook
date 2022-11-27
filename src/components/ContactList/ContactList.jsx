import React from 'react';
import { FcConferenceCall, FcPhoneAndroid } from 'react-icons/fc';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactItem';
import {
  ContactListTable,
  ContactListTbody,
  ContactListThead,
} from './ContactList.styled';

function getVisibleContacts(contacts, filterValue) {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
}

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <ContactListTable>
      <ContactListThead>
        <tr>
          <th>
            <FcConferenceCall size={40} />
          </th>
          <th>
            <FcPhoneAndroid size={40} />
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
