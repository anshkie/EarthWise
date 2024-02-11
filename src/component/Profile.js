import React, { useState } from 'react';
import defaultAvatar from './default-avatar.png'; // Assuming default-avatar.png is in the same directory as your Profile component

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [image, setImage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    // Here you can handle uploading the image
    // For simplicity, we're just updating the state with the image URL
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="profile-container bg-cover bg-center" style={{ backgroundImage: 'url(nature.jpg)' }}>
      <div className="bg-gray-800 bg-opacity-75 py-8 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl text-white font-semibold mb-4">Profile</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-32 h-32 relative rounded-full overflow-hidden">
              <img src={image || defaultAvatar} alt="Profile" className="w-full h-full object-cover" />
              <input type="file" onChange={handleImageChange} accept="image/*" className="absolute inset-0 opacity-0" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-1">Name:</label>
            <input type="text" value={name} onChange={handleNameChange} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-1">Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
