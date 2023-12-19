// src/components/ContactUs.js
import React, { useState } from "react";
import { firestore } from "../firebase";


const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the user's contact information to the "contacts" collection in Firebase
      const contactsCollection = firestore.collection("contacts"); // Ensure firestore is correctly imported
      await contactsCollection.add({
        name,
        email,
        message,
      });

      // Reset the form fields after submission
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);

      // Display a confirmation alert
      alert("Your message has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      {isSubmitted && <p style={styles.successMessage}>Thank you for contacting us!</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>


    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    margin: "8px 0",
  },
  input: {
    padding: "8px",
    margin: "8px 0",
    width: "100%",
  },
  textarea: {
    padding: "8px",
    margin: "8px 0",
    width: "100%",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  successMessage: {
    color: "#4CAF50",
  },
};

export default ContactUs;
