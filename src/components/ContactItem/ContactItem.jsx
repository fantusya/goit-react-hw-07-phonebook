import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FcFullTrash } from 'react-icons/fc';

import { deleteContact } from 'redux/contactsSlice';
import { DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <td>{contact.name}</td>
      <td>{contact.number}</td>
      <td>
        <DeleteBtn type="button" onClick={handleDelete}>
          <FcFullTrash size={30} />
        </DeleteBtn>
      </td>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
