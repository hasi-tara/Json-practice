import Contact from "./Contact.jsx";
import { useState } from "react";
import ErrorHandler from "./ErrorHandler.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import axios from "axios";
import { useEffect } from "react";

const CONTACT_API = "http://localhost:3000/contacts";
const ContactList = () => {
  const [loading, setLoading] = useState(false);
  const [Er, handle, clear] = ErrorHandler();
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await axios.get(CONTACT_API);
        setContacts(data);
      } catch (error) {
        handle(error);
      }
    };
    get();
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/contacts/${id}`)
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        handle(error);
        setLoading(false);
      });
  };

  return (
    <div>
      {Er ? <ErrorMessage clear={clear} /> : null}
      <div>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            remove={() => handleDelete(id)}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};
export default ContactList;
