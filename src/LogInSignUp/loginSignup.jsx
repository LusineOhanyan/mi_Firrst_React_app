import styles from './loginSignup.module.css'
import Popup from '../components/popup/popup.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Input from '../components/input/input.jsx';
import Button from '../components/button/button.jsx'

const LoginSignup = ({setStatus}) => {
  const [isPopupVisible, setIsPopupVisible, ] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
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
     
  const isLoggedIn = () => {
    navigate('/');
    setStatus('logged in');
  };

  
  return (
    <div className={styles.backImage}>
      <div>
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
              <Button onClick={isLoggedIn}>Log In</Button>
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
              <Button>Sign Up</Button>
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
              <Button>Send link to email</Button>
              { <p
                style={{ marginTop: '10px', cursor: 'pointer' }}
                onClick={() => setMode('signup')}
              >
                Don't have an account  Sign Up? 
              </p> }
            </>
          ) : null}
        </Popup>
      </div>
    </div>
  );
};

export default LoginSignup;
