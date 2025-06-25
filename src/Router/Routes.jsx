import {useState} from 'react'
import Homepage from '../HomePage/heroSection';
import Login from '../LogInSignUp/loginSignup';
import Header from '../components/header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const AppRoutes = () => {
   const location = useLocation();
   
  // Header-ը երևա միայն '/' (homepage)-ում
  const shouldShowHeader = location.pathname === '/';
  const [status, setStatus] = useState('logged out');
  //  const navigate = useNavigate();
  
  
  //  const isLoggedIn = () => {
  //   navigate('/');
  //   setStatus('logged in');
    console.log('Current status:', status);
  // };
  return (
    
    <>
      {shouldShowHeader && < Header isLoggedIn={status === 'logged in'}/>}

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login setStatus={setStatus} />} />
    </Routes>
    </>
  );
};

export default AppRoutes;