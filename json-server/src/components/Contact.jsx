import { Link } from "react-router-dom";
import "../styles/contact.css";
const Contact = ({ remove, loading, id, name, number }) => {
  return (
    <div className="card">
      <div className="card-text">
        <div className="card-info">
          <p className="card-info_title">Name :</p>
          <p>{name}</p>
        </div>
        <div className="card-info">
          <p className="card-info_title">Phone :</p>
          <p>{number}</p>
        </div>
        <Link className="card-text" to={`/contact/${id}`}>
          <p className="more">More.....</p>
        </Link>
        <div className="card-sepperatore"></div>
        <div className="card-ctr"></div>
      </div>
      <Link to={`/edit/${id}`}>
        <button className="edit-btn">Go to Editor</button>
      </Link>
      <button className="del-btn" disabled={loading} onClick={remove}>
        {loading ? "Pls Wait" : "Delete"}
      </button>
    </div>
  );
};

export default Contact;
