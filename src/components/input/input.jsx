import React from 'react'
import  styles from './input.module.css'


const Input = ({ label, type = 'text', value, onChange, id }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
