import React from "react";
import { useNavigate } from "react-router-dom";


const AdminPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/"); // Login sahifasiga qaytish
  };

  return (
    <div>
      <h1>Admin page</h1>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default AdminPage;
