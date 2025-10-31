import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      background: "linear-gradient(90deg, #4f46e5, #9333ea)",
      color: "white",
      textAlign: "center",
      padding: "16px 0",
      fontSize: "15px",
      fontWeight: "500",
      boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
      position: "relative",
      bottom: 0,
      width: "100%",
      letterSpacing: "0.3px",
    },
    highlight: {
      fontWeight: "700",
      color: "#fff",
    },
  };

  return (
    <footer style={styles.footer}>
      <p>
        © {new Date().getFullYear()}{" "}
        <span style={styles.highlight}>Manager Contact System</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
