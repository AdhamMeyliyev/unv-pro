import React, { useState } from 'react';

const AdminProfile = () => {
    const [email, setEmail] = useState('johndoe@example.com');
    const [number, setNumber] = useState('+1234567890');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // Default profile image URL

    const handleSaveChanges = (e) => {
        e.preventDefault();

        if (newPassword && newPassword !== confirmPassword) {
            alert('New passwords do not match.');
            return;
        }

        // Ma'lumotlarni serverga yuborish kodini qo'shing
        console.log('Updated Email:', email);
        console.log('Updated Number:', number);
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);

        alert('Changes saved successfully!');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-page">
            <h1 className='admin-profile-heading'>Admin Profile</h1>
            <div className="profile-image-container">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <label htmlFor="profileImageInput" className="upload-button">
                    <input 
                        type="file" 
                        id="profileImageInput" 
                        name="profileImage" 
                        onChange={handleImageChange} 
                        accept="image/*"
                    />
                    <span className="button-text">Rasm joylash</span>
                </label>
            </div>
            <form onSubmit={handleSaveChanges}>
                <div className="admin-profile-data-wrapper">
                <div className="profile-info">
                    <label htmlFor="adminName">Admin Ism</label>
                    <input type="text" id="adminName" name="adminName" value="John" readOnly />

                    <label htmlFor="adminSurname">Admin Familiya</label>
                    <input type="text" id="adminSurname" name="adminSurname" value="Doe" readOnly />

                    <label htmlFor="adminLogin">Admin ID</label>
                    <input type="text" id="adminLogin" name="adminLogin" value="johndoe" readOnly />

                    <label htmlFor="adminEmail">Email</label>
                    <input 
                        type="email" 
                        id="adminEmail" 
                        name="adminEmail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="edit-info">
                    <label htmlFor="adminNumber">Telefon</label>
                    <input 
                        type="text" 
                        id="adminNumber" 
                        name="adminNumber" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                    />

                    <label htmlFor="adminPasswordOld">Joriy Parol</label>
                    <input 
                        type="password" 
                        id="adminPasswordOld" 
                        name="adminPasswordOld" 
                        value={oldPassword} 
                        onChange={(e) => setOldPassword(e.target.value)} 
                    />

                    <label htmlFor="adminPasswordNew">Yangi Parol</label>
                    <input 
                        type="password" 
                        id="adminPasswordNew" 
                        name="adminPasswordNew" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                    />

                    <label htmlFor="adminPasswordConfirm">Yangi Parolni Tasdiqlang</label>
                    <input 
                        type="password" 
                        id="adminPasswordConfirm" 
                        name="adminPasswordConfirm" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                </div>
                </div>

                <button type="submit" className="save-button">Saqlash</button>
            </form>
        </div>
    );
};

export default AdminProfile;
