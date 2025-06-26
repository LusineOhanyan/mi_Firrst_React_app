import React from 'react'
import styles from './button.module.css'


const Button = ({children, onClick, isLoggedIn, style}) => {
    return(
      <button className={styles.btn} onClick={onClick} style={style}> {children} </button>
    );
}

export default Button;