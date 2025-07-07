// import styles from  "./header.module.css";
// import logo from './logo.png';
// import star from './star.png';
// import icon from './icon.png';
// import { useNavigate } from 'react-router-dom';
// import ProfileDropdown from '../profileDropdown/dropdown.jsx';
// import React, { useState, useRef, useEffect } from 'react';
// import Popup from "../popup/popup.jsx";
// import Button from "../button/button.jsx";

// const Header = ({ onLogoutClick }) => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(true); 
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef();
//   const [showPopup, setshowPopup] = useState(false);

//   const togglePopup = () => {
//     setshowPopup(!showPopup)
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false);  
//     setOpen(false);
//     setshowPopup(false);
//     if (onLogoutClick) {
//       onLogoutClick();
//     }
//   };


//   const handleOpenLogoutPopup = () => {
//   setOpen(false);        // 🔒 փակել dropdown-ը
//   setshowPopup(true);    // 🔓 բացել popup-ը
// };


//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const goToLogin = () => {
//     navigate('/login');
//   };

//   return (
//     <>
//     <header className={styles.header}>
//       <img src={logo} alt="Autie Travel Logo" className={styles.logo} />
      
//       {isLoggedIn ? (
//         <div className={styles.IconReview}>
//           <div className={styles.Review}>
//             <img src={star} alt='star' className={styles.star} />
//             <p className={styles.rate}>My reviews</p>
//           </div>
//           <img src={icon} alt="icon" className={styles.icon} onClick={() => setOpen(!open)} />
//           {open && <ProfileDropdown togglePopup={handleOpenLogoutPopup} onLogoutClick={onLogoutClick} />}
//         </div>
//       ) : (
//         <button onClick={goToLogin} className={styles.login_button}>Log in</button>
//       )}

//       {showPopup &&(
//         <Popup  hideLogo={true} visible={showPopup} style={{ width: "20%", height: "15%" }}>
//           <p style={{fontSize:"22px", fontWeight:"600", fontFamily:"Montsterrat, sans-serif"}}>Log Out?</p>
//           <p style={{fontSize:"16px", fontFamily:"Montsterrat, sans-serif", fontWeight:"500"}}>Are you sure want to log out?</p>
//           <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//             <Button style={{ width: '130px', borderRadius:"20px" }} onClick={handleLogout}>Logout</Button>
//             <Button style={{ width: '130px', borderRadius:"20px" }} onClick={togglePopup}>Cancel</Button>
//           </div>
//         </Popup>
//       )}
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
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [open, setOpen] = useState(false);
  const menuRef = useRef(); // ✅ սա կտանք div-ին
  const [showPopup, setshowPopup] = useState(false);

  const togglePopup = () => {
    setshowPopup(!showPopup);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  
    setOpen(false);
    setshowPopup(false);
    if (onLogoutClick) {
      onLogoutClick();
    }
  };

  // ✅ Այս ֆունկցիան popup բացելու ժամանակ փակում է dropdown-ը
  const handleOpenLogoutPopup = () => {
    setOpen(false);
    setshowPopup(true);
    
  };

  // ✅ Dropdown-ը փակել body-ի վրա click անելիս
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

          {/* ✅ Icon-ը և dropdown-ը միավորված div-ի մեջ, որպեսզի ref-ը աշխատի */}
          <div ref={menuRef} style={{ position: 'relative' }}>
            <img
              src={icon}
              alt="icon"
              className={styles.icon}
              onClick={() => setOpen(!open)}
            />
            {open && !showPopup(
              <ProfileDropdown
              
                togglePopup={handleOpenLogoutPopup}
                onLogoutClick={onLogoutClick}
              />
            )}
          </div>
        </div>
      ) : (
        <button onClick={goToLogin} className={styles.login_button}>Log in</button>
      )}

      {showPopup && (
        <Popup hideLogo={true} visible={showPopup} style={{ width: "20%", height: "15%" }}>
          <p style={{fontSize:"22px", fontWeight:"600", fontFamily:"Montserrat, sans-serif"}}>Log Out?</p>
          <p style={{fontSize:"16px", fontFamily:"Montserrat, sans-serif", fontWeight:"500"}}>Are you sure want to log out?</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Button style={{ width: '130px', borderRadius:"20px" }} onClick={handleLogout}>Logout</Button>
            <Button style={{ width: '130px', borderRadius:"20px" }} onClick={togglePopup}>Cancel</Button>
          </div>
        </Popup>
      )}
    </header>
    </>
  );
};

export default Header;
