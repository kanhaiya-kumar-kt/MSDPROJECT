import React from "react";
import { Link } from "react-router-dom";
import { Home, UserPlus, Users } from "lucide-react";

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: "240px",
      background: "linear-gradient(180deg, #4f46e5, #9333ea)",
      color: "#fff",
      minHeight: "100vh",
      padding: "30px 15px",
      boxShadow: "4px 0 12px rgba(0, 0, 0, 0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "20px",
      textAlign: "center",
      borderBottom: "2px solid rgba(255,255,255,0.3)",
      paddingBottom: "10px",
      width: "100%",
    },
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    li: {
      width: "100%",
    },
    link: {
      width: "100%",
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      background: "rgba(255,255,255,0.1)",
      padding: "12px 0",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      textAlign: "center",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    linkHover: {
      background: "rgba(255,255,255,0.25)",
      transform: "scale(1.03)",
    },
  };

  const [hovered, setHovered] = React.useState(null);

  const links = [
    { to: "/home", icon: <Home size={18} />, label: "Dashboard", key: "home" },
    { to: "/add", icon: <UserPlus size={18} />, label: "Add Manager", key: "add" },
    { to: "/managers", icon: <Users size={18} />, label: "View Managers", key: "view" },
  ];

  return (
    <aside style={styles.sidebar}>
      <h3 style={styles.title}>Quick Links</h3>
      <ul style={styles.ul}>
        {links.map(({ to, icon, label, key }) => (
          <li key={key} style={styles.li}>
            <Link
              to={to}
              style={{
                ...styles.link,
                ...(hovered === key ? styles.linkHover : {}),
              }}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
            >
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
