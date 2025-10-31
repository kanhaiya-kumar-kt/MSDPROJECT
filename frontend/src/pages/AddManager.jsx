import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddManager = () => {
  const [manager, setManager] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState("");

  const handleChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/managers", manager);
      alert("✅ Manager added successfully!");
      // navigate("/"); // 👈 Uncomment this if you want to redirect manually after alert
      setManager({ name: "", email: "", phone: "", department: "" }); // clear form
    } catch (err) {
      console.error("Error adding manager:", err);
      alert("❌ Failed to add manager. Please try again.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #4f46e5, #9333ea)",
      fontFamily: "Poppins, sans-serif",
    },
    card: {
      background: "#fff",
      padding: "40px 50px",
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "420px",
      textAlign: "center",
    },
    title: {
      marginBottom: "25px",
      fontSize: "28px",
      fontWeight: "700",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      margin: "8px 0",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
      outline: "none",
      transition: "0.3s",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#6366f1",
      boxShadow: "0 0 8px rgba(99,102,241,0.3)",
    },
    button: {
      marginTop: "18px",
      width: "100%",
      padding: "12px",
      background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "17px",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
      transform: "translateY(-2px)",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>Add Manager</h2>

        {["name", "email", "phone", "department"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={manager[field]}
            onChange={handleChange}
            required // ✅ makes input mandatory
            onFocus={() => setFocus(field)}
            onBlur={() => setFocus("")}
            style={{
              ...styles.input,
              ...(focus === field ? styles.inputFocus : {}),
            }}
          />
        ))}

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(hover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Save Manager
        </button>
      </form>
    </div>
  );
};

export default AddManager;
