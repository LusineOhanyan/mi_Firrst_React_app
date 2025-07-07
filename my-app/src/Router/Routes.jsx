import {useState} from 'react'
import Homepage from '../HomePage/heroSection';
import HotelReview from '../HotelReview/hotelReview.jsx';
import Login from '../LogInSignUp/loginSignup';
import Header from '../components/header/Header';
import { Routes, Route, useLocation } from 'react-router-dom';


const AppRoutes = () => {
   const location = useLocation();
   
  // Header-ը երևա միայն '/' (homepage)-ում
  const shouldShowHeader = location.pathname !== '/login';
  const [status, setStatus] = useState('logged out');
  
  
 
  console.log('Current status:', status);

  return (
    
    <>
      {shouldShowHeader && < Header isLoggedIn={status === 'logged in'}/>}

    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login setStatus={setStatus} />} />
      <Route path="/hotelReview" element={<HotelReview/>} />
    </Routes>
    </>
  );
};

export default AppRoutes;


// import HotelReview from '../HotelReview/hotelReview.jsx';
// import { Routes, Route} from 'react-router-dom';



// const AppRoutes = () => {
//  return (
    
   
//     <Routes>
//         <Route path="/hotelReview" element={<HotelReview/>} />
//     </Routes>
//   );
// };

// export default AppRoutes;