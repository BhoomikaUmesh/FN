//EmployeePage.js



import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome to the Employee Page</h1>
      <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-red-500" >Logout</button>
    </div>
  );
};

export default EmployeePage;
