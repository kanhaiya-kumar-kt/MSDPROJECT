import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ManagerDetails = () => {
  const { id } = useParams();
  const [manager, setManager] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/managers/${id}`)
      .then(res => setManager(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!manager) return <p>Loading...</p>;

  return (
    <div className="manager-details">
      <h2>{manager.name}</h2>
      <p><strong>Email:</strong> {manager.email}</p>
      <p><strong>Phone:</strong> {manager.phone}</p>
      <p><strong>Department:</strong> {manager.department}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default ManagerDetails;
