import ContactForm from "../components/ContactForm.jsx";
import { Link } from "react-router-dom";
const AddContact = () => {
  return (
    <div>
      <Link className="back" to="/">
        ---Back
      </Link>
      <h1>Add new Contacts</h1>
      <ContactForm />
      <p>Enter a name and a phone number to create New contacts!</p>
    </div>
  );
};
export default AddContact;
