import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Try again!");
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #5b3ce8, #7c3aed)",
      fontFamily: "Poppins, sans-serif",
      padding: "20px",
    },
    box: {
      background: "#ffffff",
      padding: "40px 35px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      width: "100%",
      maxWidth: "380px",
      textAlign: "center",
      boxSizing: "border-box",
    },
    title: {
      color: "#4f46e5",
      marginBottom: "25px",
      fontSize: "26px",
      fontWeight: "700",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      boxSizing: "border-box",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      border: "1px solid #d1d5db",
      borderRadius: "10px",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#7c3aed",
      boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.15)",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "linear-gradient(135deg, #4f46e5, #9333ea)",
      color: "white",
      fontSize: "16px",
      fontWeight: "600",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(147, 51, 234, 0.4)",
    },
    text: {
      marginTop: "18px",
      color: "#444",
      fontSize: "14px",
    },
    link: {
      color: "#7c3aed",
      fontWeight: "600",
      textDecoration: "none",
    },
  };

  const [hovered, setHovered] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Create an Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={{
              ...styles.input,
              ...(focusedField === "name" ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField("")}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            style={{
              ...styles.input,
              ...(focusedField === "email" ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField("")}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{
              ...styles.input,
              ...(focusedField === "password" ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField("")}
          />
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(hovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Sign Up
          </button>
        </form>
        <p style={styles.text}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
