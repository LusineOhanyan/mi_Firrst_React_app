import styles from './loginSignup.module.css';
import Popup from '../components/popup/popup.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Input from '../components/input/input.jsx';
import Button from '../components/button/button.jsx';
import success from './success.png'

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
        
      >
        <img src={success} alt="success"  style={{width:'30px', height:"30px", paddingTop:"20px"}}/>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
           Success! Your account has been created!
        </p> 
        <Button  style={{ maxWidth: '324px'}}
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
        style={{ width: '450px', height: '260px' }}
      >
        {/* <img alt="success" src="./LoginSignup/success.png" style={{width:"60px", height:"60px" }}/> */}
         <img src={success} alt="success"  style={{width:'30px', height:"30px", paddingTop:"20px"}}/>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
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
          <div className={styles.inputcontainer}>
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
                marginRight: '100px'
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
             </div>
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
            <div className={styles.inputcontainer}>
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
            </div>
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
            <div className={styles.inputcontainer}>
            <Input
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             
            <Button onClick={handleResetPassword}>Send link to email</Button>
           </div>
            <p
              style={{ marginTop: '10px', cursor: 'pointer' }}
              onClick={() => setMode('signup')}
            >
              Don't have an account? Sign Up?
            </p>
            
          </>
        ) : mode === 'verify' ? (
          <>
          
            <h2>Change Password</h2>
             <p  style={{fontFamily:"montserrat, sans-serif", fontWeight:"Medium", fontSize:"15px", padding:"10px"}}>Enter a new password below to change your password.</p>
             <div className={styles.inputcontainer}>
             
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
            </div>
          </>
        ) : null}
      </Popup>
    </div>
  );
};

export default LoginSignup;
