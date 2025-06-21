import React from "react";
import  styles from './homepage.module.css';
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    
    <div
      className={styles.full_screen}>
       <div className={styles.text_center}>
        <h1 className={styles.text_4xl}>
          The Neurodiverse <br /> travel site
        </h1>
        
        <p className={styles.mt_4}>
          Hotel ratings based on sound, scent, texture, lighting, and staff.
        </p>

        <div className={styles.mt_8}>
            <div className={styles.search_container}>
            <FaSearch className={styles.search_icon} />
          <input
            type="text"
            placeholder="Search by hotel name, city or state"
            className={styles.inputStyle}
           />
    
      </div>
        
          <button className={styles.searchButton}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
