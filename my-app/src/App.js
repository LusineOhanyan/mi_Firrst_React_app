import React from 'react';
import { BrowserRouter} from 'react-router-dom';
// import HeroSection from './HomePage/heroSection';  // ճիշտ import ֆայլի անունով
// import Header from './components/header/Header';
// // import LoginSignup from './LogInSignUp/loginSignup';

import AppRoutes from './Router/Routes';

function App() {
  return (
    <div className="App"  >
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
     
    </div>
    );
}

export default App;

