import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditManager = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [manager, setManager] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/managers/${id}`)
      .then((res) => setManager(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) =>
    setManager({ ...manager, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/managers/${id}`, manager)
      .then(() => navigate("/managers"))
      .catch((err) => console.error(err));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit Manager Details</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            value={manager.name}
            onChange={handleChange}
            placeholder="Full Name"
            style={styles.input}
            required
          />
          <input
            name="email"
            value={manager.email}
            onChange={handleChange}
            placeholder="Email"
            style={styles.input}
            required
          />
          <input
            name="phone"
            value={manager.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            style={styles.input}
            required
          />
          <input
            name="department"
            value={manager.department}
            onChange={handleChange}
            placeholder="Department"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Update Manager
          </button>
        </form>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#4f46e5",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #4f46e5, #9333ea)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default EditManager;
