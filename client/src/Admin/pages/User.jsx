import React, { useState, useEffect } from 'react';
import axios from 'axios';

// User component
const User = () => {
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');

  const getUserByEmail = async () => {
    try {
      const response = await axios.get(`http://your-api-url/user/${email}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (email) {
      getUserByEmail();
    }
  }, [email]);

  return (
    <div>
      <h2>User Page</h2>
      <input
        type="text"
        placeholder="Enter user email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Other user data */}
        </div>
      )}
    </div>
  );
};
