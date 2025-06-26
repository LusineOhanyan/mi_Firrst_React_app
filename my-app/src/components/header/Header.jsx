// import styles from  "./header.module.css";
// import logo from './logo.png';
// import star from './star.png';
// import icon from './icon.png';
// import { useNavigate } from 'react-router-dom';
// import ProfileDropdown from '../profileDropdown/dropdown.jsx';
// import React, { useState, useRef, useEffect } from 'react';
// import Popup from "../popup/popup.jsx";
// import Button from "../button/button.jsx";

// const Header = ({ isLoggedIn, onLogoutClick  }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef();
//   const [showPopup, setshowPopup] = useState(false);

//   const togglePopup = () => {
//     setshowPopup(!showPopup)
//   }

//   const handleLogout = () => {
//   setIsLoggedIn(false); // թաքցնում է icon-ը, ցույց է տալիս login կոճակը
//   setOpen(false);       // փակում է dropdown-ը
//   setshowPopup(false);  // փակում է popup-ը
//   if (onLogoutClick) {
//     onLogoutClick();    // եթե ունես լրացուցիչ logout գործողություն
//   }
// };


//   useEffect(() => {
//       const handleClickOutside = (e) => {
//         if (menuRef.current && !menuRef.current.contains(e.target)) {
//           setOpen(false);
//         }
//       };
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//   const goToLogin = () => {
//     navigate('/login');
//   };
 
//   // console.log(`${showPopup ? "Pop shown" : "Pop up hidden"}`)

//   return (
//     <>
//     <header className={styles.header}>
//       <img src={logo} alt="Autie Travel Logo" className={styles.logo} />
      
//       {isLoggedIn ? (
//         <div className={styles.IconReview}>
//           <div className={styles.Review}>
//             <img src={star} alt='star' className={styles.star}  />
//             <p className={styles.rate}>My reviews</p>
//           </div>
//           <img src={icon} alt="icon" className={styles.icon} onClick={() => setOpen(!open)}/>
//           {open && <ProfileDropdown togglePopup={togglePopup} onLogoutClick={onLogoutClick}/>}
//         </div>
//       ) : (
//         <button onClick={goToLogin} className={styles.login_button} isLoggedIn={false}>Log in</button>
//       )}
//       {showPopup && <Popup visible={showPopup} style={{ width: '250px', height: '250px' }}>
//         <p>Are you sure want to log out?</p>
//          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//       <Button style={{ width: '100px' }} isLoggedIn={false} onClick={handleLogout} >Logout</Button>
//       <Button style={{ width: '100px' }} onClick={togglePopup}>Cancel</Button>
//     </div>
//         </Popup>}
//     </header>
//     </>
//   );
// };

// export default Header;


import styles from  "./header.module.css";
import logo from './logo.png';
import star from './star.png';
import icon from './icon.png';
import { useNavigate } from 'react-router-dom';
import ProfileDropdown from '../profileDropdown/dropdown.jsx';
import React, { useState, useRef, useEffect } from 'react';
import Popup from "../popup/popup.jsx";
import Button from "../button/button.jsx";

const Header = ({ onLogoutClick }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 👈 Ավելացրինք այս state-ը
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const [showPopup, setshowPopup] = useState(false);

  const togglePopup = () => {
    setshowPopup(!showPopup)
  }

  const handleLogout = () => {
    setIsLoggedIn(false);  // 👈 Փոխում ենք login վիճակը
    setOpen(false);
    setshowPopup(false);
    if (onLogoutClick) {
      onLogoutClick();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
    <header className={styles.header}>
      <img src={logo} alt="Autie Travel Logo" className={styles.logo} />
      
      {isLoggedIn ? (
        <div className={styles.IconReview}>
          <div className={styles.Review}>
            <img src={star} alt='star' className={styles.star} />
            <p className={styles.rate}>My reviews</p>
          </div>
          <img src={icon} alt="icon" className={styles.icon} onClick={() => setOpen(!open)} />
          {open && <ProfileDropdown togglePopup={togglePopup} onLogoutClick={onLogoutClick} />}
        </div>
      ) : (
        <button onClick={goToLogin} className={styles.login_button}>Log in</button>
      )}

      {showPopup && (
        <Popup visible={showPopup} style={{ width: '250px', height: '250px' }}>
          <p>Are you sure want to log out?</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Button style={{ width: '100px' }} onClick={handleLogout}>Logout</Button>
            <Button style={{ width: '100px' }} onClick={togglePopup}>Cancel</Button>
          </div>
        </Popup>
      )}
    </header>
    </>
  );
};

export default Header;
