import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/global.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ Check login status on mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.title}>Manager Contact</h2>

      <div style={styles.linkContainer}>
        {isLoggedIn ? (
          <>
            <Link to="/home" style={styles.button}>
              Dashboard
            </Link>
            <Link to="/managers" style={styles.button}>
              Managers
            </Link>
            <Link to="/add" style={styles.button}>
              Add Manager
            </Link>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" style={styles.button}>
              Home
            </Link>
            <Link to="/login" style={styles.button}>
              Login
            </Link>
            <Link to="/signup" style={styles.button}>
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

// ✅ CSS-in-JS Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(90deg, #4f46e5, #9333ea)",
    padding: "15px 40px",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
  },
  linkContainer: {
    display: "flex",
    gap: "15px",
  },
  button: {
    background: "#ffffff20",
    color: "#fff",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "500",
    transition: "0.3s",
  },
  logoutButton: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },
};

// ✅ Hover Effects (inject directly into CSS)
const hoverStyle = document.createElement("style");
hoverStyle.innerHTML = `
  a:hover {
    background: rgba(255,255,255,0.3) !important;
    transform: scale(1.05);
  }
  button:hover {
    background: #dc2626 !important;
    transform: scale(1.05);
  }
`;
document.head.appendChild(hoverStyle);

export default Navbar;
