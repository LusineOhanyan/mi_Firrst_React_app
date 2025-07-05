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
  const menuRef = useRef();
  const [showPopup, setshowPopup] = useState(false);

  const togglePopup = () => {
    setshowPopup(!showPopup)
  }

  const handleLogout = () => {
    setIsLoggedIn(false);  
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
        <Popup  hideLogo={true} visible={showPopup} style={{ width: "20%", height: "15%" }}>
          <p style={{fontSize:"22px", fontWeight:"600", fontFamily:"Montsterrat, sans-serif"}}>Log Out?</p>
          <p style={{fontSize:"16px", fontFamily:"Montsterrat, sans-serif", fontWeight:"500"}}>Are you sure want to log out?</p>
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
