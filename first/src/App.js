//App.js



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
// import HrPage from './pages/HrPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/pages/LoginPage" element={<LoginPage />} />
        {/* <Route path="/pages/HrPage" element={<HrPage />}/> */}
      </Routes>
    </Router>
  );
};

export default App;
