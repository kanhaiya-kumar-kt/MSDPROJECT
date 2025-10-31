import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "800",
      marginBottom: "15px",
      textShadow: "0 4px 10px rgba(0,0,0,0.3)",
    },
    subtitle: {
      fontSize: "20px",
      maxWidth: "700px",
      marginBottom: "40px",
      lineHeight: "1.6",
      color: "rgba(255,255,255,0.9)",
    },
    buttonGroup: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    button: {
      textDecoration: "none",
      background: "#fff",
      color: "#4f46e5",
      padding: "12px 24px",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "16px",
      transition: "0.3s",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
    buttonHover: {
      background: "#4f46e5",
      color: "#fff",
      transform: "scale(1.05)",
    },
  };

  const [hoverLogin, setHoverLogin] = React.useState(false);
  const [hoverSignup, setHoverSignup] = React.useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Manager Contact System</h1>
      <p style={styles.subtitle}>
        Manage your organization's managers efficiently. Add, edit, and track
        manager details in one secure and easy-to-use dashboard.
      </p>

      <div style={styles.buttonGroup}>
        <Link
          to="/login"
          style={{ ...styles.button, ...(hoverLogin ? styles.buttonHover : {}) }}
          onMouseEnter={() => setHoverLogin(true)}
          onMouseLeave={() => setHoverLogin(false)}
        >
          Login
        </Link>

        <Link
          to="/signup"
          style={{ ...styles.button, ...(hoverSignup ? styles.buttonHover : {}) }}
          onMouseEnter={() => setHoverSignup(true)}
          onMouseLeave={() => setHoverSignup(false)}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default FrontPage;
