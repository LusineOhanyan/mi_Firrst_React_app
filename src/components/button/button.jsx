import React from 'react'
import styles from './button.module.css'


const Button = ({children, onClick, isLoggedIn}) => {
    return(
      <button className={styles.btn} onClick={onClick}>{children}</button>
    );
}

export default Button;