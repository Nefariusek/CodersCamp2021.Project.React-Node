import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';

import { DarkThemeProvider } from './components/DarkThemeContext/DarkThemeContext';
import reportWebVitals from './reportWebVitals';
import App from './views/App/App';

ReactDOM.render(
  <React.StrictMode>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
