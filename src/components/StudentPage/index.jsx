import React from "react";
import { useNavigate } from "react-router-dom";

const StudentPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/"); // Login sahifasiga qaytish
  };

  return (
    <div>
      <h1>Student Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default StudentPage;
