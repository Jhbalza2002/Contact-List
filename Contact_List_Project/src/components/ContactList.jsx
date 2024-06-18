import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactRow from "./ContactRow";
import './ContactList.css';

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await axios.get(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        setContacts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, []);

  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId}
          />
        ))}
      </tbody>
    </table>
  );
}