import './sass/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import CreditsPage from './views/CreditsPage/CreditsPage';
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import SignUpPage from './views/SignUpPage/SignUpPage';

const PATHS = [
  { url: '/', element: <HomePage /> },
  { url: '/login', element: <LoginPage /> },
  { url: '/register', element: <SignUpPage /> },
  // {url: '/userhub', element: <Userhub/>},
  // {url: '/dailydrugs', element: <DailyDrugsPage />},
  // {url: '/calendar', element: <Calendar/>},
  // {url: '/lexicon', element: <LexiconPage />},
  { url: '/credits', element: <CreditsPage /> },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {PATHS.map((path) => (
          <Route path={path.url} element={path.element} />
        ))}
        ;
        {/*
          <Route path="/" element={<WelcomePage />}>  
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/userhub" element={<Userhub />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/dailydrugs" element={<DailyDrugsPage />} />
          <Route path="/lexicon" element={<LexiconPage />} /> */}
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Page not found</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
