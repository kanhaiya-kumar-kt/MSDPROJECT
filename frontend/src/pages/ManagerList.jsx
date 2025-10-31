import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManagerList = () => {
  const [managers, setManagers] = useState([]);
  const [hoverAdd, setHoverAdd] = useState(false);
  const [hoverDelete, setHoverDelete] = useState(null);
  const [hoverEdit, setHoverEdit] = useState(null);
  const [hoverRow, setHoverRow] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/managers")
      .then((res) => setManagers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteManager = (id) => {
    axios
      .delete(`http://localhost:5000/api/managers/${id}`)
      .then(() => setManagers(managers.filter((m) => m._id !== id)))
      .catch((err) => console.error(err));
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #4f46e5, #9333ea)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      color: "#333",
    },
    header: {
      fontSize: "30px",
      fontWeight: "700",
      color: "#fff",
      marginBottom: "30px",
      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
    },
    addButton: {
      textDecoration: "none",
      background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      transition: "0.3s",
    },
    addButtonHover: {
      background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
      transform: "scale(1.05)",
    },
    tableContainer: {
      marginTop: "30px",
      width: "90%",
      maxWidth: "900px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      overflow: "hidden",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      background: "#4f46e5",
      color: "#fff",
      padding: "12px 15px",
      textAlign: "left",
      fontSize: "16px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    td: {
      padding: "12px 15px",
      fontSize: "15px",
      borderBottom: "1px solid #eee",
    },
    row: {
      transition: "0.3s",
    },
    rowHover: {
      backgroundColor: "#f9f9ff",
    },
    button: {
      border: "none",
      padding: "8px 14px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "0.3s",
      marginRight: "8px",
    },
    deleteButton: {
      background: "#ef4444",
      color: "#fff",
    },
    deleteButtonHover: {
      background: "#dc2626",
      transform: "scale(1.05)",
    },
    editButton: {
      background: "#10b981",
      color: "#ffffffff",
    },
    editButtonHover: {
      background: "#059669",
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Manager Contact List</h2>

      <Link
        to="/add"
        style={{
          ...styles.addButton,
          ...(hoverAdd ? styles.addButtonHover : {}),
        }}
        onMouseEnter={() => setHoverAdd(true)}
        onMouseLeave={() => setHoverAdd(false)}
      >
        ➕ Add Manager
      </Link>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Department</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((m, index) => (
              <tr
                key={m._id}
                style={{
                  ...styles.row,
                  ...(hoverRow === index ? styles.rowHover : {}),
                }}
                onMouseEnter={() => setHoverRow(index)}
                onMouseLeave={() => setHoverRow(null)}
              >
                <td style={styles.td}>{m.name}</td>
                <td style={styles.td}>{m.email}</td>
                <td style={styles.td}>{m.phone}</td>
                <td style={styles.td}>{m.department}</td>
                <td style={styles.td}>
                  {/* ✏️ Edit Button */}
                  <Link
                    to={`/edit/${m._id}`}
                    style={{
                      ...styles.button,
                      ...styles.editButton,
                      ...(hoverEdit === index ? styles.editButtonHover : {}),
                    }}
                    onMouseEnter={() => setHoverEdit(index)}
                    onMouseLeave={() => setHoverEdit(null)}
                  >
                    Edit
                  </Link>

                  {/* ❌ Delete Button */}
                  <button
                    style={{
                      ...styles.button,
                      ...styles.deleteButton,
                      ...(hoverDelete === index
                        ? styles.deleteButtonHover
                        : {}),
                    }}
                    onMouseEnter={() => setHoverDelete(index)}
                    onMouseLeave={() => setHoverDelete(null)}
                    onClick={() => deleteManager(m._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerList;
