import React, { useEffect } from "react";
import CourseCards from "../Course";
import { useLocation, useNavigate } from 'react-router-dom';
import StudentCards from "./StudentCards";
const courses = [
  {
    id: 1,
    name: 'React for Beginners',
    duration: '3 months',
    startDate: '2024-09-01',
    endDate: '2024-12-01',
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    duration: '2 months',
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`
    
  },

  {
    id: 2,
    name: 'Advanced JavaScript',
    duration: '2 months',
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`
    
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    duration: '2 months',
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`
    
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    duration: '2 months',
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`
    
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    duration: '2 months',
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`
    
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    duration: '2 months',
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`
    
  },

  // Add more courses as needed
];

const StudentDashboard = () => {
  const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Sahifa yuklanganda, URLni saqlash
        const savedPath = localStorage.getItem('currentPath');
        if (savedPath) {
            navigate(savedPath);
        }

        // Sahifa holatini saqlash
        return () => {
            localStorage.setItem('currentPath', location.pathname);
        };
    }, [location.pathname, navigate]);
  return (
    <>
      <h2 className="users-heading">Ro'yxatga o'tganlar</h2>

      <div className="calendar-wrapper">
        <ul className="users-wrapper">
          <li
            data-title="Ro'yxatdan o'tgan o'qituvchilar soni"
            className="user-item"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/unv-img.png`}
              alt="rasm"
            />
            <span>
              <h2 className="number">12</h2>
              <p className="title">O'qituvchilar soni</p>
            </span>
          </li>

          <li
            data-title="Ro'yxatdan o'tgan o'quvchilar soni"
            className="user-item user"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/unv-img.png`}
              alt="rasm"
            />
            <span>
              <h2 className="number">24</h2>
              <p className="title">O'quvchilar soni</p>
            </span>
          </li>

          <li data-title="Kurslar soni" className="user-item">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/unv-img.png`}
              alt="rasm"
            />
            <span>
              <h2 className="number">16</h2>
              <p className="title">Kurslar soni</p>
            </span>
          </li>

          <li data-title="Ro'yxatdan o'tmaganlar soni" className="user-item">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/unv-img.png`}
              alt="rasm"
            />
            <span>
              <h2 className="number">5</h2>
              <p className="title">Ro'yxatdan o'tmagan</p>
            </span>
          </li>
        </ul>
        <div className="course-calendar-wrapper">
        <div className="card" style={{ padding: '10px' }}>
      <StudentCards courses={courses} />
    </div>
        {/* <CalendarClock /> */}
          </div>  
      </div>
      
    </>
  );
};

export default StudentDashboard;
