import './App.scss';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { useDarkTheme } from '../../components/DarkThemeContext/DarkThemeContext';
import { lightTheme } from '../../components/DarkThemeContext/themeStyles';
import Navbar from '../../components/Navbar/Navbar';
import {
  PATH_TO_CALENDAR,
  PATH_TO_CREDITS,
  PATH_TO_DAILY_DRUGS,
  PATH_TO_HOMEPAGE,
  PATH_TO_LEXICON,
  PATH_TO_LOGIN,
  PATH_TO_REGISTER,
  PATH_TO_SETTINGS,
} from '../../constants/paths';
import CalendarPage from '../CalendarPage/CalendarPage';
import CreditsPage from '../CreditsPage/CreditsPage';
import DailyView from '../DailyView/DailyView';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';

const paths = [
  { url: PATH_TO_CALENDAR, element: <CalendarPage /> },
  { url: PATH_TO_CREDITS, element: <CreditsPage /> },
  { url: PATH_TO_DAILY_DRUGS, element: <DailyView /> },
  { url: PATH_TO_LEXICON, element: <p>Lexicon</p> },
  { url: PATH_TO_LOGIN, element: <LoginPage /> },
  { url: PATH_TO_REGISTER, element: <SignUpPage /> },
  { url: PATH_TO_SETTINGS, element: <p>Settings</p> },
];

const App = () => {
  const darkMode = useDarkTheme();
  console.log(darkMode);
  const currentTheme = lightTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={PATH_TO_HOMEPAGE} element={<HomePage />} />
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
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
