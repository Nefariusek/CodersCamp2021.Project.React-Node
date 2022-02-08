import './App.scss';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import { useDarkTheme } from '../../components/DarkThemeContext/DarkThemeContext';
import { darkTheme, lightTheme } from '../../components/DarkThemeContext/themeStyles';
import Navbar from '../../components/Navbar/Navbar';
import PrivatePath from '../../components/PrivatePath/PrivatePath';
import {
  PATH_TO_CALENDAR,
  PATH_TO_CREDITS,
  PATH_TO_DAILY_DRUGS,
  PATH_TO_LANDINGPAGE,
  PATH_TO_LEXICON,
  PATH_TO_LOGIN,
  PATH_TO_MY_DRUGS,
  PATH_TO_REGISTER,
  PATH_TO_SETTINGS,
  PATH_TO_USER_HOMEPAGE,
} from '../../constants/paths';
import CalendarPage from '../CalendarPage/CalendarPage';
import CreditsPage from '../CreditsPage/CreditsPage';
import DailyView from '../DailyView/DailyView';
import HomePage from '../HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import MyDrugsPage from '../MyDrugsPage/MyDrugsPage';
import SignUpPage from '../SignUpPage/SignUpPage';

const paths = [
  { url: PATH_TO_CALENDAR, element: <PrivatePath site={<CalendarPage />} /> },
  { url: PATH_TO_CREDITS, element: <CreditsPage /> },
  { url: PATH_TO_DAILY_DRUGS, element: <PrivatePath site={<DailyView />} /> },
  { url: PATH_TO_LEXICON, element: <p>Lexicon</p> },
  { url: PATH_TO_LOGIN, element: <LoginPage /> },
  { url: PATH_TO_REGISTER, element: <SignUpPage /> },
  { url: PATH_TO_USER_HOMEPAGE, element: <HomePage /> },
  { url: PATH_TO_SETTINGS, element: <p>Settings</p> },
  { url: PATH_TO_MY_DRUGS, element: <MyDrugsPage /> },
];

const App = () => {
  const darkMode = useDarkTheme();
  const currentTheme = darkMode ? darkTheme : lightTheme;

  const { pathname } = useLocation();
  const pathsWithoutNavbar = [PATH_TO_LANDINGPAGE, PATH_TO_LOGIN, PATH_TO_REGISTER];

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="App">
        {pathsWithoutNavbar.indexOf(pathname) >= 0 ? null : <Navbar />}

        <Routes>
          <Route path={PATH_TO_LANDINGPAGE} element={<LandingPage />} />
          {paths.map((path) => (
            <Route key={path.url} path={path.url} element={path.element} />
          ))}
          <Route
            path="/*"
            element={
              <main style={{ padding: '1rem' }}>
                <Link to={PATH_TO_LANDINGPAGE}>Page not found. Click here to continue to the home page</Link>
              </main>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
