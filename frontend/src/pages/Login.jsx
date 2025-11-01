import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("https://contact-manager-msdbackend.onrender.com/api/auth/login", {
        email,
        password,
      });

      // ✅ Save token & user data to localStorage
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("✅ Login successful!");
      navigate("/home"); // ✅ Redirect to dashboard
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manager Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p style={styles.error}>{error}</p>}
      </form>

      <p style={styles.switch}>
        Don’t have an account?{" "}
        <Link to="/signup" style={styles.link}>
          Signup
        </Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "20px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    padding: "30px 25px",
    borderRadius: "12px",
    width: "320px",
    color: "#333",
    boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
  },
  input: {
    margin: "10px 0",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    transition: "0.3s",
  },
  error: {
    color: "red",
    marginTop: "10px",
    fontSize: "14px",
  },
  switch: {
    marginTop: "15px",
    color: "#fff",
    fontSize: "15px",
  },
  link: {
    color: "#ffd700",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default Login;
