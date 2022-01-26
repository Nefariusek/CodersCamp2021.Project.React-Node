import './App.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

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
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';

const paths = [
  { url: PATH_TO_CALENDAR, element: <CalendarPage /> },
  { url: PATH_TO_CREDITS, element: <CreditsPage /> },
  { url: PATH_TO_DAILY_DRUGS, element: <p>Daily drugs</p> },
  { url: PATH_TO_LEXICON, element: <p>Lexicon</p> },
  { url: PATH_TO_LOGIN, element: <LoginPage /> },
  { url: PATH_TO_REGISTER, element: <SignUpPage /> },
  { url: PATH_TO_SETTINGS, element: <p>Settings</p> },
];

const aidkitTheme = createTheme({
  palette: {
    primary: {
      main: '#48cae4',
    },
    secondary: {
      main: '#fcd433',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    label: {
      main: '1b4c56',
    },
    error: {
      main: '#880e4f',
    },
    background: {
      default: '#48cae4',
    },
    title: {
      main: '#023e8a',
      light: '#059ac8',
    },
    navbar: {
      main: '#1976d2',
    },
    datetime: {
      mainFont: '#102a71',
      mainBackground: '#fcd433',
      currentDayFont: '#102a71',
      currentDayBackground: '#95d4e0',
    },
    tonalOffset: 0.1,
  },

  components: {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fcd433',
          color: '#102a71',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: '#95d4e0',
          color: '#102a71',
          fontWeight: 900,
          '&.Mui-selected': {
            backgroundColor: '#102a71',
            color: '#fff',
            '&:hover, &:focus, &.Mui-focusVisible': {
              backgroundColor: '#102a71',
              color: '#fff',
            },
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={aidkitTheme}>
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
