import React from "react";
import PropTypes from "prop-types";
import "./ContactListItem.scss";

const ContactListItem = ({ name, number, contactId, deleteContact }) => {
  return (
    <li className="Item">
      <p>
        {name}: {number}
      </p>
      <button
        className="Item__button"
        type="button"
        onClick={() => deleteContact(contactId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
