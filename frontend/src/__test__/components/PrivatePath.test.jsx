import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginContext from '../../components/LoginContext/LoginContext';
import PrivatePath from '../../components/PrivatePath/PrivatePath';

test('PrivatePath directs authorized users to PrivatePage', () => {
  const history = createBrowserHistory();
  history.push('/private');

  render(
    <LoginContext.Provider value={{ loginStatus: true }}>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/login" element={<div>LoginPage</div>} />
          <Route path="/private" element={<PrivatePath site={<div>PrivatePage</div>} />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>,
  );
  expect(screen.queryByText('LoginPage')).not.toBeInTheDocument();
  expect(screen.getByText('PrivatePage')).toBeInTheDocument();
  expect(window.location.pathname).toBe('/private');
});

test('PrivatePath redirects unauthorized users to LoginPage', () => {
  const history = createBrowserHistory();
  history.push('/private');

  render(
    <LoginContext.Provider value={{ loginStatus: false }}>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/login" element={<div>LoginPage</div>} />
          <Route path="/private" element={<PrivatePath site={<div>PrivatePage</div>} />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>,
  );
  expect(screen.queryByText('PrivatePage')).not.toBeInTheDocument();
  expect(screen.getByText('LoginPage')).toBeInTheDocument();
  expect(window.location.pathname).toBe('/login');
});
