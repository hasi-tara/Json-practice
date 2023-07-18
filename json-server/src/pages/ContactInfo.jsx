import axios from "axios";
import ErrorMessage from "../components/ErrorMessage.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorHandler from "../components/ErrorHandler.jsx";
import "../styles/contactInfo.css";

const ContactInfo = () => {
  const [Er, handle, clear] = ErrorHandler();
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/contacts/${id}`)
      .then((res) => {
        setContact(res.data);
        setLoading(false);
      })
      .catch((error) => {
        handle(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {Er ? <ErrorMessage clear={clear} /> : null}
      <div>
        <Link className="back" to="/">
          ---Back
        </Link>
        <h1>Contact Info</h1>
        {loading ? (
          <p className="loding">Loading...</p>
        ) : (
          <div>
            <p className="title">Name:</p>
            <p>{contact.name}</p>
            <p className="title">Phone Number:</p>
            <p>{contact.number}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
