import React from "react";
import styles from  "./header.module.css";
import logo from './logo.png'; // փոխիր ըստ իրական ճանապարհի 


const Header = ({ title, subtitle, children, onLoginClick, isLoggedIn }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Autie Travel Logo" className={styles.logo} />

         <button className={styles.login_button}>Log in</button>
    </header>
  );
};


export default Header;
