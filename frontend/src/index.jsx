import './sass/styles.scss';
import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
// import App from './views/App/App';
import HomePage from './views/HomePage/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
=======
import LoginPage from './views/LoginPage/LoginPage';

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
>>>>>>> origin/develop
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
