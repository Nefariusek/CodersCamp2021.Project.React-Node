import './App.scss';

import { Link, Route, Routes, useLocation } from 'react-router-dom';

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
// import HomePage from '../HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';
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
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname === PATH_TO_HOMEPAGE ? null : <Navbar />}
      <Routes>
        <Route path={PATH_TO_HOMEPAGE} element={<LandingPage />} />
        {paths.map((path) => (
          <Route key={path.url} path={path.url} element={path.element} />
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
    </div>
  );
};

export default App;
