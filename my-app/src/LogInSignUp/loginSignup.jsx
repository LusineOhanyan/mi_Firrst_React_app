// import React from 'react'
import styles from './loginSignup.module.css'
import Popup from '../components/popup/popup.jsx'
import React, { useState } from 'react';

const LoginSignup = () => {
     const [isPopupVisible, setIsPopupVisible] = useState(true);  // սկզբից բաց է popup-ը

  const closePopup = () => {
    setIsPopupVisible(false);
  };
    return(
    <div className={styles.backImage}>
         <div>
      <Popup visible={isPopupVisible} onClose={closePopup}>
        <h2>Hi! Let’s get you signed in.</h2>
        <p>This is some content inside the popup.</p>
      </Popup>
    </div>
          
    </div>
  
    )
}
export default LoginSignup




// const LoginSignup = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(true);  // սկզբից բաց է popup-ը

//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div>
//       <Popup visible={isPopupVisible} onClose={closePopup}>
//         <h2>Welcome to the popup!</h2>
//         <p>This is some content inside the popup.</p>
//       </Popup>
//     </div>
//   );
// };

// export default LoginSignup;
