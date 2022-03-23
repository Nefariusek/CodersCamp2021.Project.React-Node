import './LoginPage.scss';

import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import loginValidation from '../../api/loginValidation';
import postData from '../../api/postData';
import buttonStyles from '../../components/Button/Button.module.scss';
import LoginContext from '../../components/LoginContext/LoginContext';
import ModalContext from '../../components/ModalContext/ModalContext';
import PopupModal from '../../components/PopupModal/PopupModal';
import { AID_KIT_IMAGE_ALT, AID_KIT_IMAGE_PATH } from '../../constants/images';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';
import { PATH_TO_REGISTER, PATH_TO_USER_HOMEPAGE } from '../../constants/paths';
import { BASE_URL } from '../../constants/restResources';

const MESSAGES = {
  success: 'Sign in successful!',
  error: 'An error has occurred',
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiMessage, setApiMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const auth = useContext(LoginContext);
  const modalState = useContext(ModalContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isFormValid = false;
    loginValidation(username, password, setUsernameError, setPasswordError);

    if (!(usernameError || passwordError)) {
      isFormValid = true;
    }

    if (isFormValid) {
      const userData = { username, password };

      const { data, error } = await postData(`${BASE_URL}api/users/login`, userData);

      if (error) {
        setApiMessage(error.message || MESSAGES.error);
        modalState.setIsModalOpen(true);
      } else {
        auth.setLoginStatus(true);
        auth.setUserData(data);
        setSuccessMessage(MESSAGES.success);

        setTimeout(() => {
          navigate(PATH_TO_USER_HOMEPAGE, { replace: true });
        }, 1000);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
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
            label="USERNAME"
            variant="filled"
            color="secondary"
            error={usernameError}
            style={{
              width: '80%',
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
            }}
          />

          <Typography variant="p" component="p" align="center">
            {successMessage}
          </Typography>
          <PopupModal message={apiMessage} type="error" modalState={modalState} />

          <Button type="submit" variant="contained" className={buttonStyles.Button}>
            Log In
          </Button>
          <Button component={Link} to={PATH_TO_REGISTER} color="secondary">
            Create New Account
          </Button>
        </form>
      </div>
      <img src={AID_KIT_IMAGE_PATH} alt={AID_KIT_IMAGE_ALT} />
    </div>
  );
};

export default LoginPage;
