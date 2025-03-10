import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import StudentTable from "../AdminPage/studenttable";
import AdminDashboard from "../AdminPage/admin-dashboard";
import CourseCards from "../Course";
import TeacherProfile from "./TeacherProfile";
const courses = [
  {
    id: 1,
    name: "React for Beginners",
    duration: "3 months",
    startDate: "2024-09-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    duration: "2 months",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  },

  {
    id: 2,
    name: "Advanced JavaScript",
    duration: "2 months",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    duration: "2 months",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    duration: "2 months",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    duration: "2 months",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    duration: "2 months",
    startDate: "2024-10-01",
    endDate: "2024-12-01",
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  },

  // Add more courses as needed
];

const TeacherPage = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/"); // Login sahifasiga qaytish
  };

  return (
    <div className="teacher-page-wrapper">
      <div className="teacher-left sidbar">
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
          </ul>
          <button className="logout-btn" onClick={handleLogout}>
            Chiqish <i class="fa-solid fa-forward"></i>
          </button>
        </div>
      </div>
      <div className="teacher-right">
        <Navbar />
        <div className="heading-calendar-wrapper">
          <h1 className="teacher-page">Teacher</h1>
          {/* <CalendarClock /> */}
          <div className="teacher-main-wrapper">
            {/* Sidebar itemga qarab tarkibni ko'rsatish */}
            {activeItem === "dashboard" && <AdminDashboard />}
            {activeItem === "profil" && <TeacherProfile />}
            {/* Qo'shimcha boshqa tarkiblar: */}
            {activeItem === "course" && (
              <div>
                <div style={{ padding: "10px" }}>
                  <CourseCards courses={courses} />
                </div>
              </div>
            )}
            {activeItem === "message" && <div>Message Component</div>}
            {activeItem === "student" && (
              <div>
                <StudentTable />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
