import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);
  // const [user, setUser] = useState({
  //   name: 'Samantha',
  //   surname: 'Smith',
  //   phone: '+1234567890',
  //   email: 'samantha@example.com',
  //   image: `${process.env.PUBLIC_URL}/assets/images/unv-img.png`,
  // });

  // const profileRef = useRef(null);

  // const handleEdit = () => {
  //   setIsEditing(true);
  // };

  // const handleSave = async (updatedUser) => {
  //   try {
  //     // API so'rovi
  //     const response = await fetch('/api/update-profile', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedUser),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     setUser(updatedUser);
  //     console.log('User updated successfully:', data);
  //     setIsEditing(false);
  //   } catch (error) {
  //     console.error('Error updating user:', error);
  //   }
  // };

  // const handleCancel = () => {
  //   setIsEditing(false);
  // };

  // const handleClose = () => {
  //   setShowProfile(false);
  // };

  // const handleClickOutside = (event) => {
  //   if (profileRef.current && !profileRef.current.contains(event.target)) {
  //     setShowProfile(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="navbar-wrapper">
      <form>
        <input className="search-input" type="search" id="search" placeholder="Bu yerda qidiring" />
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
        >
          <g
            fill="#162d3a"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
            </g>
          </g>
        </svg>
      </form>

      <div className="messages-wrapper">
        <span className="bell-wrapper">
          <i className="fa-regular fa-bell bell-icon"></i>
          <span className="number">10</span>
        </span>
        <span className="message-wrapper">
          <i className="fa-regular fa-message message-icon"></i>
          <span className="number"></span>
        </span>
      </div>

      <span className="navbar-hr"></span>

      <div className="profile-wrapper" >
        <h3 className="user-name">Hello, <span>Samantha</span></h3>
        <img className="user-img" src={`${process.env.PUBLIC_URL}/assets/images/unv-img.png`} alt="user-img" />
      </div>

      {/* {showProfile && (
        <div className="profile-modal" ref={profileRef}>
          {isEditing ? (
            <div className="edit-profile-card">
              <h3>Edit Profile</h3>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                type="text"
                name="surname"
                value={user.surname}
                onChange={(e) => setUser({ ...user, surname: e.target.value })}
              />
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setUser({ ...user, image: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <button onClick={() => handleSave(user)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div className="profile-card">
              <h3>{user.name} {user.surname}</h3>
              <img src={user.image} alt="user-img" />
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleClose}>Close</button>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
