import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="home">
      <h1>Welcome to Your App</h1>
      
      {user ? (
        <div>
          <p>You are logged in!</p>
          <Link to="/profile">
            <button className="btn">Go to Profile</button>
          </Link>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in or register to continue.</p>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
