import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { DarkThemeProvider } from './components/DarkThemeContext/DarkThemeContext';
import { LoginProvider } from './components/LoginContext/LoginContext';
import { ModalProvider } from './components/ModalContext/ModalContext';
import { SettingsProvider } from './components/SettingsContext/SettingsContext';
import reportWebVitals from './reportWebVitals';
import App from './views/App/App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <SettingsProvider>
        <DarkThemeProvider>
          <LoginProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </LoginProvider>
        </DarkThemeProvider>
      </SettingsProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
