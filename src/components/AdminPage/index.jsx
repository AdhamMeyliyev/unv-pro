import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import AdminDashboard from "./admin-dashboard";
import StudentTable from "./studenttable";
import TeacherTable from "./teachertable";
import CourseCards from "../Course";
import MessagePage from "../MessagePage";
import AdminProfile from "./AdminProfile";

const courses = [
  {
    id: 1,
    name: "React for Beginners",
    duration: "3 months",
    startDate: "2024-09-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
    instructor: 'John Doe', // Misol uchun to'liq nom
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, modi?'
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    duration: "2 months",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
    instructor: 'Jane Smith',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, modi?'
  },
  // Qo'shimcha kurslar qo'shing
];
const AdminPage = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/"); // Login sahifasiga qaytish
  };

  return (
    <div className="admin-page-wrapper">
      <div className="admin-left sidbar">
        <div className="sidbar-wrapper">
          <a href="#">
            
            <img
              className="sidbar-logo"
              src={`${process.env.PUBLIC_URL}/assets/logos/logo.png`}
              alt="unv-logo"
            />
          </a>

          <h2 className="unv-name">Qarshi Xalqaro Uneversitetiti</h2>

          <ul className="sidbar-list">
            <li
              className={`sidbar-list-item ${
                activeItem === "dashboard" ? "active" : ""
              }`}
              onClick={() => setActiveItem("dashboard")}
            >
              <i className="fa-solid fa-house"></i>
              Dashboard
              <span className="sidbar-item-active"></span>
            </li>
            <li
              className={`sidbar-list-item ${
                activeItem === "profil" ? "active" : ""
              }`}
              onClick={() => setActiveItem("profil")}
            >
              <i className="fa-solid fa-user"></i> 

              Profil
            </li>

            <li
              className={`sidbar-list-item ${
                activeItem === "course" ? "active" : ""
              }`}
              onClick={() => setActiveItem("course")}
            >
              <i className="fa-brands fa-discourse"></i>
              Course
              <span className="sidbar-item-active"></span>
            </li>

            <li
              className={`sidbar-list-item ${
                activeItem === "message" ? "active" : ""
              }`}
              onClick={() => setActiveItem("message")}
            >
              <i className="fa-solid fa-envelope"></i>
              Message
              <span className="sidbar-item-active"></span>
            </li>

            <li
              className={`sidbar-list-item ${
                activeItem === "student" ? "active" : ""
              }`}
              onClick={() => setActiveItem("student")}
            >
              <i className="fa-solid fa-user-graduate"></i>
              Students
              <span className="sidbar-item-active"></span>
            </li>

            <li
              className={`sidbar-list-item ${
                activeItem === "teacher" ? "active" : ""
              }`}
              onClick={() => setActiveItem("teacher")}
            >
              <i className="fa-solid fa-chalkboard-teacher"></i>
              Teachers
              <span className="sidbar-item-active"></span>
            </li>
          </ul>
          <button className="logout-btn" onClick={handleLogout}>
            Chiqish <i className="fa-solid fa-forward"></i>
          </button>
        </div>
      </div>
      <div className="admin-right">
      <Navbar />
        <h1 className="admin-page">Admin</h1>
        <div className="admin-main-wrapper">
          {activeItem === "dashboard" && <AdminDashboard />}
          {activeItem === "profil" && <AdminProfile />}
          {activeItem === "course" && <CourseCards courses={courses} />}
          {activeItem === "message" && <MessagePage />}
          {activeItem === "student" && <StudentTable />}
          {activeItem === "teacher" && <TeacherTable />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
