import './sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import App from './views/App/App';
import LoginPage from './views/LoginPage/LoginPage';
import SignUpPage from './views/SignUpPage/SignUpPage';

ReactDOM.render(
  <React.StrictMode>
    <SignUpPage />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
