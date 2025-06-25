import React from 'react';
import styles from './popup.module.css'; 
import logo from './logo.png'; 


const Popup = ({ visible, onClose, children, footerText, onFooterClick }) => {
  if (!visible) return null;
 
  return (
    <div className={styles.popup_overlay}>
      <div className={styles.popup}>
        <img className={styles.logo}
          src={logo}
          alt="Logo"
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
