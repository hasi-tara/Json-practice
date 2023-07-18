import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage.jsx";
import ErrorHandler from "./ErrorHandler.jsx";
import "../styles/contactform.css";
const CONTACT_API = "http://localhost:3000/contacts";
const ContactForm = () => {
  const [Er, handle, clear] = ErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("Please fill both fields!");
    } else {
      try {
        setIsLoading(true);
        await axios.post(CONTACT_API, contact);
        setContact({ name: "", number: "" });
        navigate("/");
      } catch (error) {
        handle(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div>
      {Er ? <ErrorMessage clear={clear} /> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={number}
            name="number"
            onChange={handleChange}
            type="tel"
            placeholder="Phone"
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
