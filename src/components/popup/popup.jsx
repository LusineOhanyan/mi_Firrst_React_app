import React from 'react';
import styles from './popup.module.css'; 
import logo from './logo.png'; 


const Popup = ({ visible, onClose, children, footerText, onFooterClick, style, hideLogo }) => {
  if (!visible) return null;
 
  return (
    <div className={styles.popup_overlay}>
      <div className={styles.popup} style={style}>
        {!hideLogo && (
        <img className={styles.logo}
          src={logo}
          alt="Logo"
        />
        )}
        {children}
      </div>
    </div>
  );  
};

export default Popup; 
