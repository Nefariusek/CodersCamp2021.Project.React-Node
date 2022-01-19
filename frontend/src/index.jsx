import './sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import App from './views/App/App';
import DailyDrugsPage from './views/DailyDrugsPage/DailyDrugsPage';
import LoginPage from './views/LoginPage/LoginPage';

ReactDOM.render(
  <React.StrictMode>
    <DailyDrugsPage />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
