import './LoginPage.scss';

import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import loginValidation from '../../api/loginValidation';
import buttonStyles from '../../components/Button/Button.module.scss';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';
import { PATH_TO_REGISTER } from '../../constants/paths';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginValidation(username, password, setUsernameError, setPasswordError);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Typography variant="h1" color="#023e8a" fontWeight="bold">
          {APP_NAME}
        </Typography>
        <Typography variant="h2" color="#059ac8" fontWeight="bold">
          {APP_SUBTITLE}
        </Typography>
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            id="username-input"
            onChange={(e) => setUsername(e.target.value)}
            label="USERNAME OR E-MAIL"
            variant="outlined"
            error={usernameError}
            style={{
              width: '80%',
              backgroundColor: '#42b6dc',
            }}
          />
          <TextField
            id="password-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="PASSWORD"
            variant="outlined"
            error={passwordError}
            style={{
              width: '80%',
              backgroundColor: '#42b6dc',
            }}
          />
          <Button type="submit" variant="contained" className={buttonStyles.Button}>
            Log In
          </Button>
          <Button component={Link} to={PATH_TO_REGISTER}>
            Create New Account
          </Button>
        </form>
      </div>
      <img src="./apteczka.png" alt="" />
    </div>
  );
};

export default LoginPage;