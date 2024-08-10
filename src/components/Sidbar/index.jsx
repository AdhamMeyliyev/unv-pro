import React, { useState } from "react";

const Sidbar = () => {
  const [activeItem, setActiveItem] = useState();

  return (
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
          <span className="sidbar-item-active"></span>
          <i className="fa-solid fa-house"></i>
          Dashboard
        </li>

        <li
          className={`sidbar-list-item ${
            activeItem === "profil" ? "active" : ""
          }`}
          onClick={() => setActiveItem("profil")}
        >
          <span className="sidbar-item-active"></span>
          <i className="fa-solid fa-house"></i>
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
      </ul>
    </div>
  );
};

export default Sidbar;
