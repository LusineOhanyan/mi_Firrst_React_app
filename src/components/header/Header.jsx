// import React from "react";
// import styles from  "./header.module.css";
// import logo from './logo.png'; // փոխիր ըստ իրական ճանապարհի 
// import star from './star.png'
// import icon from './icon.png'
// import { useNavigate } from 'react-router-dom';

// const Header = ({ title, subtitle, children, onLoginClick, isLoggedIn }) => {
//   const navigate = useNavigate(); // սա Hook-ն է
  

//   const goToLogin = () => {
//     navigate('/login'); // ուղղակի տանում է login էջ
//   };
//   return (
//     <header className={styles.header} >
//       <img src={logo} alt="Autie Travel Logo" className={styles.logo} />
//       {isLoggedIn ? (
//         <div className={styles.IconReview}>
//           <div className={styles.Review}>
//              <img  src={star} alt='star'  className={styles.star}></img>
//             <p className={styles.rate}>
//               My reviews
//             </p>
           
//           </div>
//           <img src={icon} alt="icon" className={styles.icon}></img>
//         </div>
//       )} 
//          {!isLoggedIn && (
//   <button onClick={goToLogin} className={styles.login_button}>Log in</button>
// )}
//     </header>
//   );
// };


// export default Header;


import React from "react";
import styles from  "./header.module.css";
import logo from './logo.png';
import star from './star.png';
import icon from './icon.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="Autie Travel Logo" className={styles.logo} />
      
      {isLoggedIn ? (
        <div className={styles.IconReview}>
          <div className={styles.Review}>
            <img src={star} alt='star' className={styles.star} />
            <p className={styles.rate}>My reviews</p>
          </div>
          <img src={icon} alt="icon" className={styles.icon} />
        </div>
      ) : (
        <button onClick={goToLogin} className={styles.login_button}>Log in</button>
      )}
    </header>
  );
};

export default Header;
