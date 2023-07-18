import React, { useState } from "react";
import ContactList from "../components/ContactList.jsx";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    navigate("/add-contact");
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div>
      {isLoading ? (
        <div className="loding">Loading...</div>
      ) : (
        <div>
          <h1>Contacts</h1>
          <button onClick={handleClick}>Click To Add new Contacts!</button>
          <div>
            <ContactList />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
