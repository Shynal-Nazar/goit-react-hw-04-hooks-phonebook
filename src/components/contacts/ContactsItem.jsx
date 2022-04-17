import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem, ContactsItemName, ContactsBtn } from './Contact.styled';

const ContactListItem = ({ name, number, onClickRemove }) => {
  return (
    <ContactsItem>
      <ContactsItemName>
        {name}: {number}
      </ContactsItemName>
      <ContactsBtn type="button" onClick={onClickRemove}>
        Delete
      </ContactsBtn>
    </ContactsItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};
