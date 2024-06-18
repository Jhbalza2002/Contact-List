import React from "react";
import './ContactRow.css'; // Import the CSS file

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr className="contact-row" onClick={() => setSelectedContactId(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}