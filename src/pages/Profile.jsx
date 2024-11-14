import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
