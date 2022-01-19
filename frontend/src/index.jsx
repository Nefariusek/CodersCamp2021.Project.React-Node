import './sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import HomePage from './views/HomePage/HomePage';
// import LoginPage from './views/LoginPage/LoginPage';
// import SignUpPage from './views/SignUpPage/SignUpPage';
import {
  PATH_TO_CALENDAR,
  PATH_TO_CREDITS,
  PATH_TO_DAILY_DRUGS,
  PATH_TO_HOMEPAGE,
  PATH_TO_LEXICON,
  PATH_TO_LOGIN,
  PATH_TO_REGISTER,
  PATH_TO_USERHUB,
} from './constants/paths';
import reportWebVitals from './reportWebVitals';
import App from './views/App/App';
import CreditsPage from './views/CreditsPage/CreditsPage';

const paths = [
  { url: PATH_TO_CALENDAR, element: <p>Calendar</p> },
  { url: PATH_TO_CREDITS, element: <CreditsPage /> },
  { url: PATH_TO_DAILY_DRUGS, element: <p>Daily drugs</p> },
  { url: PATH_TO_LEXICON, element: <p>Lexicon</p> },
  { url: PATH_TO_LOGIN, element: <p>Login</p> },
  { url: PATH_TO_REGISTER, element: <p>Register</p> },
  { url: PATH_TO_USERHUB, element: <p>Userhub</p> },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={PATH_TO_HOMEPAGE} element={<App />} />
        {paths.map((path) => (
          <Route path={path.url} element={path.element} />
        ))}
        <Route
          path="/*"
          element={
            <main style={{ padding: '1rem' }}>
              <Link to={PATH_TO_HOMEPAGE}>Page not found. Click here to continue to the home page</Link>
            </main>
          }
        />
        {/* 
          <Route path="/" element={<WelcomePage />}>  
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/userhub" element={<Userhub />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/dailydrugs" element={<DailyDrugsPage />} />
          <Route path="/lexicon" element={<LexiconPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
