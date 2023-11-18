// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Your Logo/Brand</Link>
        {/* Add additional links as needed */}
        <div className="space-x-4">
          <Link to="/dashboard" className="text-white">Dashboard</Link>
          <Link to="/profile" className="text-white">Profile</Link>
          <Link to="/pages/LoginPage" className="text-white">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
