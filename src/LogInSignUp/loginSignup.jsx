// import styles from './loginSignup.module.css'
// import Popup from '../components/popup/popup.jsx'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import Input from '../components/input/input.jsx';
// import Button from '../components/button/button.jsx'

// const LoginSignup = ({setStatus}) => {
//   const [isPopupVisible, setIsPopupVisible, ] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mode, setMode] = useState('login');
//   const [name, setName] = useState('');
//   const navigate = useNavigate();
//   const [successPopupVisible, setSuccessPopupVisible] = useState(false);
 
//   console.log("successPopupVisible");
//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   const handleSignUpClick = () => {
//     setMode('signup');
//   };

//   const handleForgotPasswordClick = () => {
//     setMode('reset');
//   };
     
//   const isLoggedIn = () => {
//     navigate('/');
//     setStatus('logged in');
//   };

  
//   return (
//     <div className={styles.backImage}>
//       <div>
//         <Popup visible={isPopupVisible} onClose={closePopup}>
//           {mode === 'login' ? (
//             <>
//               <h2>Hi! Let’s get you signed in.</h2>
//               <Input
//                 id="email"
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Input
//                 id="password"
//                 label="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <p
//                 onClick={handleForgotPasswordClick}
//                 style={{
//                   cursor: 'pointer',
//                   textDecoration: 'underline',
//                   marginLeft: '-253px',
//                 }}
//               >
//                 Forgot your password?
//               </p>
//               <Button onClick={isLoggedIn}>Log In</Button>
//               <p style={{ marginTop: '10px', fontSize: '14px' }}>
//                 Don’t have an account?{' '}
//                 <span
//                   onClick={handleSignUpClick}
//                   style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                 >
//                   Sign up
//                 </span>
//               </p>
//             </>
//           ) : mode === 'signup' ? (
//             <>
//               <h2>Welcome! Create your account below.</h2>
//               <Input
//                 id="email"
//                 label="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Input
//                 id="name"
//                 label="Username"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <Input
//                 id="password"
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Input
//                 id="ReEnterpassword"
//                 label="Re-Enter password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//           <Button onClick={() => {
//   setSuccessPopupVisible(true);     // ցույց տալ success popup
//   setTimeout(() => {
//     setSuccessPopupVisible(false);  // success popup-ը թաքցնել
//     setIsPopupVisible(false);       // հիմնական popup-ը փակել
//     setStatus('logged in');
//     navigate('/');
//   }, 1500); // 1.5 վայրկյան սպասում
// }}>
//   Sign Up
// </Button>

//               <p
//                 style={{ marginTop: '10px', cursor: 'pointer' }}
//                 onClick={() => setMode('login')}
//               >
//                 Already have an account? <strong>Log in</strong>
//               </p>
//             </>
//           ) : mode === 'reset' ? (
//             <>
//               <h2>Reset Your Password</h2>
//               <Input
//                 id="email"
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Button>Send link to email</Button>
//               { <p
//                 style={{ marginTop: '10px', cursor: 'pointer' }}
//                 onClick={() => setMode('signup')}
//               >
//                 Don't have an account  Sign Up? 
//               </p> }
//             </>
//           ) : null}
//         </Popup>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;








// import styles from './loginSignup.module.css';
// import Popup from '../components/popup/popup.jsx';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import Input from '../components/input/input.jsx';
// import Button from '../components/button/button.jsx';

// const LoginSignup = ({ setStatus }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mode, setMode] = useState('login');
//   const [name, setName] = useState('');
//   const [successPopupVisible, setSuccessPopupVisible] = useState(false);

//   const navigate = useNavigate();

//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   const handleSignUpClick = () => {
//     setMode('signup');
//   };

//   const handleForgotPasswordClick = () => {
//     setMode('reset');
//   };

//   const handleSignUpSubmit = () => {
//     setSuccessPopupVisible(true);
//     setTimeout(() => {
//       setSuccessPopupVisible(false);
//       setIsPopupVisible(false);
//       setStatus('logged in');
//       navigate('/');
//     }, 1500);
//   };

//   return (
//     <div className={styles.backImage}>
//       {successPopupVisible && (
//         <Popup>
//           <p>Success! Your account has been created!</p>
//         </Popup>
//         // <div style={{
//         //   position: 'fixed',
//         //   top: '30%',
//         //   left: '50%',
//         //   transform: 'translate(-50%, -50%)',
//         //   backgroundColor: '#e0ffe0',
//         //   padding: '20px 30px',
//         //   borderRadius: '12px',
//         //   boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
//         //   fontSize: '18px',
//         //   zIndex: 9999
//         // }}>
//         //   ✅ Success! Redirecting...
//         // </div>
//       )}

//       <div>
//         <Popup visible={isPopupVisible} onClose={closePopup}>
//           {mode === 'login' ? (
//             <>
//               <h2>Hi! Let’s get you signed in.</h2>
//               <Input
//                 id="email"
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Input
//                 id="password"
//                 label="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <p
//                 onClick={handleForgotPasswordClick}
//                 style={{
//                   cursor: 'pointer',
//                   textDecoration: 'underline',
//                   marginLeft: '-253px',
//                 }}
//               >
//                 Forgot your password?
//               </p>
//               <Button onClick={() => {
//                 setIsPopupVisible(false);
//                 setStatus('logged in');
//                 navigate('/');
//               }}>
//                 Log In
//               </Button>
//               <p style={{ marginTop: '10px', fontSize: '14px' }}>
//                 Don’t have an account?{' '}
//                 <span
//                   onClick={handleSignUpClick}
//                   style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                 >
//                   Sign up
//                 </span>
//               </p>
//             </>
//           ) : mode === 'signup' ? (
//             <>
//               <h2>Welcome! Create your account below.</h2>
//               <Input
//                 id="email"
//                 label="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Input
//                 id="name"
//                 label="Username"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <Input
//                 id="password"
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Input
//                 id="ReEnterpassword"
//                 label="Re-Enter password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Button onClick={handleSignUpSubmit}>Sign Up</Button>
//               <p
//                 style={{ marginTop: '10px', cursor: 'pointer' }}
//                 onClick={() => setMode('login')}
//               >
//                 Already have an account? <strong>Log in</strong>
//               </p>
//             </>
//           ) : mode === 'reset' ? (
//             <>
//               <h2>Reset Your Password</h2>
//               <Input
//                 id="email"
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <Button>Send link to email</Button>
//               <p
//                 style={{ marginTop: '10px', cursor: 'pointer' }}
//                 onClick={() => setMode('signup')}
//               >
//                 Don't have an account? Sign Up?
//               </p>
//             </>
//           ) : null}
//         </Popup>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;




// import styles from './loginSignup.module.css';
// import Popup from '../components/popup/popup.jsx';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import Input from '../components/input/input.jsx';
// import Button from '../components/button/button.jsx';

// const LoginSignup = ({ setStatus }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(true);
//   const [successPopupVisible, setSuccessPopupVisible] = useState(false);
//   const [resetPasswordVisible, setResetPasswordVisible] = useState(false);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mode, setMode] = useState('login');
//   const [name, setName] = useState('');

//   const navigate = useNavigate();

//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   const handleSignUpClick = () => {
//     setMode('signup');
//   };

//   const handleForgotPasswordClick = () => {
//     setMode('reset');
//   };

//   const handleSignUpSubmit = () => {
//     setIsPopupVisible(false);
//     setSuccessPopupVisible(true);

//   };

//   const handleResetPassword = () => {
//     setMode('verify');

//   }

//   return (
//     <div className={styles.backImage}>
//       <Popup
//         visible={successPopupVisible} style={{ width: '450px', height: '300px' }}
//         >
//         <p style={{ textAlign: 'center', fontSize: '18px', padding: '20px' }}>
//           Success! Your account has been created!
//         </p> 
//         <Button onClick={() => {
//       setSuccessPopupVisible(false);
//       setStatus('logged in');
//       navigate('/');
//     }}>Continue</Button>
//       </Popup>

     
//       <Popup visible={isPopupVisible} onClose={closePopup}>
//         {mode === 'login' ? (
//           <>
//             <h2>Hi! Let’s get you signed in.</h2>
//             <Input
//               id="email"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               id="password"
//               label="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <p
//               onClick={handleForgotPasswordClick}
//               style={{
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//                 marginLeft: '-253px',
//               }}
//             >
//               Forgot your password?
//             </p>
//             <Button onClick={() => {
//               setIsPopupVisible(false);
//               setStatus('logged in');
//               navigate('/');
//             }}>
//               Log In
//             </Button>
//             <p style={{ marginTop: '10px', fontSize: '14px' }}>
//               Don’t have an account?{' '}
//               <span
//                 onClick={handleSignUpClick}
//                 style={{ cursor: 'pointer', textDecoration: 'underline' }}
//               >
//                 Sign up
//               </span>
//             </p>
//           </>
//         ) : mode === 'signup' ? (
//           <>
//             <h2>Welcome! Create your account below.</h2>
//             <Input
//               id="email"
//               label="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               id="name"
//               label="Username"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <Input
//               id="password"
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Input
//               id="ReEnterpassword"
//               label="Re-Enter password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button onClick={handleSignUpSubmit}>Sign Up</Button>
//             <p
//               style={{ marginTop: '10px', cursor: 'pointer' }}
//               onClick={() => setMode('login')}
//             >
//               Already have an account? <strong>Log in</strong>
//             </p>
//           </>
//         ) : mode === 'reset' ? (
//           <>
//             <h2>Reset Your Password</h2>
//             <Input
//               id="email"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Button  onClick={handleResetPassword}>Send link to email</Button>
//             <p
//               style={{ marginTop: '10px', cursor: 'pointer' }}
//               onClick={() => setMode('signup')}
//             >
//               Don't have an account? Sign Up?
//             </p>
//           </>
//         ) : mode === 'verify' ? (
//           <>
//            <Input
//       id="newPassword"
//       label="New Password"
//       type="password"
//       value={newPassword}
//       onChange={(e) => setNewPassword(e.target.value)}
//     />
//     <Input
//       id="re-enterPassword"
//       label="Re-enter new Password"
//       type="password"
//       value={confirmPassword}
//       onChange={(e) => setConfirmPassword(e.target.value)}
//     />

//     <Button
//       onClick={() => {
//         setIsPopupVisible(false);
//         // setStatus('logged in');
//         // navigate('/');
//       }}
//     >
//       Save Password
//     </Button>
// </>
//         ) : null}
//       </Popup>
//     </div>
//   );
// };

// export default LoginSignup;



// import styles from './loginSignup.module.css';
// import Popup from '../components/popup/popup.jsx';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import Input from '../components/input/input.jsx';
// import Button from '../components/button/button.jsx';

// const LoginSignup = ({ setStatus }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(true);
//   const [successPopupVisible, setSuccessPopupVisible] = useState(false);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [mode, setMode] = useState('login');

//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const navigate = useNavigate();

//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   const handleSignUpClick = () => {
//     setMode('signup');
//   };

//   const handleForgotPasswordClick = () => {
//     setMode('reset');
//   };

//   const handleSignUpSubmit = () => {
//     setIsPopupVisible(false);
//     setSuccessPopupVisible(true);
//   };

//   const handleResetPassword = () => {
//     setMode('verify');
//   };

//   const handleVerifySubmit = () => {
//     setIsPopupVisible(false);
//     setStatus('logged in');
//     navigate('/');
//   };

//   return (
//     <div className={styles.backImage}>
//       {/* Success popup */}
//       <Popup
//         visible={successPopupVisible}
//         style={{ width: '450px', height: '300px' }}
//       >
//         <p style={{ textAlign: 'center', fontSize: '18px', padding: '20px' }}>
//           ✅ Success! Your account has been created!
//         </p> 
//         <Button
//           onClick={() => {
//             setSuccessPopupVisible(false);
//             setStatus('logged in');
//             navigate('/');
//           }}
//         >
//           Continue
//         </Button>
//       </Popup>

//       {/* Main popup */}
//       <Popup visible={isPopupVisible} onClose={closePopup}>
//         {mode === 'login' ? (
//           <>
//             <h2>Hi! Let’s get you signed in.</h2>
//             <Input
//               id="email"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               id="password"
//               label="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <p
//               onClick={handleForgotPasswordClick}
//               style={{
//                 cursor: 'pointer',
//                 textDecoration: 'underline',
//                 marginLeft: '-253px',
//               }}
//             >
//               Forgot your password?
//             </p>
//             <Button onClick={() => {
//               setIsPopupVisible(false);
//               setStatus('logged in');
//               navigate('/');
//             }}>
//               Log In
//             </Button>
//             <p style={{ marginTop: '10px', fontSize: '14px' }}>
//               Don’t have an account?{' '}
//               <span
//                 onClick={handleSignUpClick}
//                 style={{ cursor: 'pointer', textDecoration: 'underline' }}
//               >
//                 Sign up
//               </span>
//             </p>
//           </>
//         ) : mode === 'signup' ? (
//           <>
//             <h2>Welcome! Create your account below.</h2>
//             <Input
//               id="email"
//               label="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               id="name"
//               label="Username"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <Input
//               id="password"
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Input
//               id="ReEnterpassword"
//               label="Re-Enter password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button onClick={handleSignUpSubmit}>Sign Up</Button>
//             <p
//               style={{ marginTop: '10px', cursor: 'pointer' }}
//               onClick={() => setMode('login')}
//             >
//               Already have an account? <strong>Log in</strong>
//             </p>
//           </>
//         ) : mode === 'reset' ? (
//           <>
//             <h2>Reset Your Password</h2>
//             <Input
//               id="email"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Button onClick={handleResetPassword}>Send link to email</Button>
//             <p
//               style={{ marginTop: '10px', cursor: 'pointer' }}
//               onClick={() => setMode('signup')}
//             >
//               Don't have an account? Sign Up?
//             </p>
//           </>
//         ) : mode === 'verify' ? (
//           <>
//             <h2>Enter New Password</h2>
//             <Input
//               id="newPassword"
//               label="New Password"
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <Input
//               id="re-enterPassword"
//               label="Re-enter New Password"
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <Button onClick={handleVerifySubmit}>Save Password</Button>
//           </>
//         ) : null}
//       </Popup>
//     </div>
//   );
// };

// export default LoginSignup;




import styles from './loginSignup.module.css';
import Popup from '../components/popup/popup.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Input from '../components/input/input.jsx';
import Button from '../components/button/button.jsx';

const LoginSignup = ({ setStatus }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);
  const [passwordUpdatedPopup, setPasswordUpdatedPopup] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mode, setMode] = useState('login');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSignUpClick = () => {
    setMode('signup');
  };

  const handleForgotPasswordClick = () => {
    setMode('reset');
  };

  const handleSignUpSubmit = () => {
    setIsPopupVisible(false);
    setSuccessPopupVisible(true);
  };

  const handleResetPassword = () => {
    setMode('verify');
  };

  const handleVerifySubmit = () => {
    setIsPopupVisible(false);
    setPasswordUpdatedPopup(true);

  };

  return (
    <div className={styles.backImage}>
      <Popup
        visible={successPopupVisible}
        style={{ width: '450px', height: '300px' }}
      >
        <p style={{ textAlign: 'center', fontSize: '18px', padding: '20px' }}>
          ✅ Success! Your account has been created!
        </p> 
        <Button
          onClick={() => {
            setSuccessPopupVisible(false);
            navigate('/');
          }}
        >
          Continue
        </Button>
      </Popup>

      {/* Password updated popup */}
      <Popup
        visible={passwordUpdatedPopup}
        style={{ width: '450px', height: '350px' }}
      >
        <p style={{ textAlign: 'center', fontSize: '18px', padding: '20px' }}>
         Password reset successful! You can now log in with your new password.
        </p>
        <Button
          onClick={() => {
            setSuccessPopupVisible(false);
             // setStatus('null') ;
            navigate('/');
          }}
        >
          Continue
        </Button>
      </Popup>
     

      {/* Main popup */}
      <Popup visible={isPopupVisible} onClose={closePopup}>
        {mode === 'login' ? (
          <>
            <h2>Hi! Let’s get you signed in.</h2>
            <Input
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              onClick={handleForgotPasswordClick}
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                marginLeft: '-253px',
              }}
            >
              Forgot your password?
            </p>
            <Button onClick={() => {
              setIsPopupVisible(false);
              setStatus('logged in');
              navigate('/');
            }}>
              Log In
            </Button>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              Don’t have an account?{' '}
              <span
                onClick={handleSignUpClick}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign up
              </span>
            </p>
          </>
        ) : mode === 'signup' ? (
          <>
            <h2>Welcome! Create your account below.</h2>
            <Input
              id="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="name"
              label="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              id="ReEnterpassword"
              label="Re-Enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSignUpSubmit}>Sign Up</Button>
            <p
              style={{ marginTop: '10px', cursor: 'pointer' }}
              onClick={() => setMode('login')}
            >
              Already have an account? <strong>Log in</strong>
            </p>
          </>
        ) : mode === 'reset' ? (
          <>
            <h2>Reset Your Password</h2>
            <Input
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleResetPassword}>Send link to email</Button>
            <p
              style={{ marginTop: '10px', cursor: 'pointer' }}
              onClick={() => setMode('signup')}
            >
              Don't have an account? Sign Up?
            </p>
          </>
        ) : mode === 'verify' ? (
          <>
            <h2>Enter New Password</h2>
            <Input
              id="newPassword"
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              id="re-enterPassword"
              label="Re-enter New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button onClick={handleVerifySubmit}>Save Password</Button>
          </>
        ) : null}
      </Popup>
    </div>
  );
};

export default LoginSignup;
