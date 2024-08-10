// import React, { useState } from "react";

// const EditProfileCard = ({ user, onSave, onCancel }) => {
//   const [formData, setFormData] = useState(user);
//   const [image, setImage] = useState(user.image);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         setFormData((prev) => ({
//           ...prev,
//           image: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="edit-profile-card">
//       <div className="image-container">
//         <img
//           src={image}
//           alt={formData.name}
//           className="profile-image"
//         />
//         <label className="upload-btn">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           <span className="upload-icon">📸</span>
//         </label>
//       </div>
//       <div className="card-content">
//         <h2>Edit Profile</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="text-field"
//         />
//         <input
//           type="text"
//           name="surname"
//           placeholder="Surname"
//           value={formData.surname}
//           onChange={handleChange}
//           className="text-field"
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="text-field"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="text-field"
//         />
//         <div className="buttons">
//           <button className="save-btn" onClick={() => onSave(formData)}>Save</button>
//           <button className="cancel-btn" onClick={onCancel}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfileCard;
