import './LoginPage.scss';

import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import loginValidation from '../../api/loginValidation';
import buttonStyles from '../../components/Button/Button.module.scss';
import LoginContext from '../../components/LoginContext/LoginContext';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';
import { PATH_TO_REGISTER } from '../../constants/paths';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const auth = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginValidation(username, password, setUsernameError, setPasswordError, auth.setLoginStatus);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <CssBaseline />
        <Typography variant="h1" color="title.main" fontWeight="bold">
          {APP_NAME}
        </Typography>
        <Typography variant="h2" color="title.light" fontWeight="bold">
          {APP_SUBTITLE}
        </Typography>
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            id="username-input"
            onChange={(e) => setUsername(e.target.value)}
            label="USERNAME OR E-MAIL"
            variant="filled"
            color="secondary"
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
            variant="filled"
            color="secondary"
            error={passwordError}
            style={{
              width: '80%',
              backgroundColor: '#42b6dc',
            }}
          />
          <Button type="submit" variant="contained" className={buttonStyles.Button}>
            Log In
          </Button>
          <Button component={Link} to={PATH_TO_REGISTER} color="secondary">
            Create New Account
          </Button>
        </form>
      </div>
      <img src="./apteczka.png" alt="" />
    </div>
  );
};

export default LoginPage;
