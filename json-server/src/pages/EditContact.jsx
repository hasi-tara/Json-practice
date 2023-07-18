import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage.jsx";
import ErrorHandler from "../components/ErrorHandler.jsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/editcontact.css";

const EditContact = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [Er, handle, clear] = ErrorHandler();
  const [isEditMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/contacts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        handle(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Wait...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSaving(true);

    axios
      .put(`http://localhost:3000/contacts/${id}`, data)
      .then((res) => {
        setEditMode(false);
        setData(res.data);
        setSaving(false);
      })
      .catch((error) => {
        handle(error);
        setSaving(false);
      });
    navigate("/");
  };

  return (
    <div>
      <Link className="back" to="/">
        ---Back
      </Link>
      {Er ? <ErrorMessage clear={clear} /> : null}
      <div>
        <h1>Edit info</h1>
        {isEditMode ? (
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
              type="text"
            />
            <label>Phone</label>
            <input
              onChange={(e) => setData({ ...data, number: e.target.value })}
              value={data.number}
              type="tel"
            />
            <div className="btn">
              <button
                className="discard-btn"
                onClick={() => setEditMode(false)}
                type="submit"
              >
                Discard
              </button>
              <button className="save-btn" type="submit" disabled={saving}>
                {saving ? "Waiting..." : "Save Changes"}
              </button>
            </div>
          </form>
        ) : (
          <div>
            <p>Click to Edit "{data.name}'s" info!</p>
            <button onClick={() => setEditMode(true)}>Click Here!</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditContact;
