import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/"); // Login sahifasiga qaytish
  };

  return (
    <div>
      <h1>Teacher Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TeacherPage;
