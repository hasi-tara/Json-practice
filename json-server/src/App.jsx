import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EditContact from "./pages/EditContact.jsx";
import ContactInfo from "./pages/ContactInfo.jsx";
import AddContact from "./pages/AddContact.jsx";
import NotFound from "./pages/NotFound.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<ContactInfo />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
