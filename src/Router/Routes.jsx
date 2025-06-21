import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from '../HomePage/heroSection';
import Login from '../LogInSignUp/loginSignup';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;