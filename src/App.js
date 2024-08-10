import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import StudentPage from "./components/StudentPage"; // Talaba sahifasi
import TeacherPage from "./components/TeacherPage"; // O'qituvchi sahifasi
import AdminPage from "./components/AdminPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem('role', role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem('role');
  };

  const ProtectedRoute = ({ element, requiredRole }) => {
    const location = useLocation();
    const role = localStorage.getItem('role');
  
    // Agar roli yo'q bo'lsa yoki roli kerakli roldan farq qilsa
    if (!role || role !== requiredRole) {
      // Login sahifasiga qaytarish
      return <Navigate to="/" state={{ from: location }} />;
    }
  
    return element;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/studentpage"
          element={<ProtectedRoute element={<StudentPage onLogout={handleLogout} />} requiredRole="student" />}
        />
        <Route
          path="/teacherpage"
          element={<ProtectedRoute element={<TeacherPage onLogout={handleLogout} />} requiredRole="teacher" />}
        />
        <Route
          path="/adminpage"
          element={<ProtectedRoute element={<AdminPage onLogout={handleLogout} />} requiredRole="admin" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
};

export default App;
