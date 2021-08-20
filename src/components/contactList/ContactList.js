import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import "./ContactList.scss";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactId={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
