import React, { useState, useEffect } from "react";
import axios from "axios";
import './SelectedContact.css'; // Import the CSS file

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await axios.get(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        setContact(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="selected-contact-container">
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Id: {contact.id}</p>
      <p>Website: {contact.website}</p>
      <p>
        Address: {contact.address.street}, {contact.address.city}
      </p>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
    </div>
  );
}