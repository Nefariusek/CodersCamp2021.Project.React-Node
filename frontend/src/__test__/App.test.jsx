import { render, screen } from '@testing-library/react';

import App from '../views/App/App';

test('renders navbar', () => {
  render(<App />);
  const navElement = screen.queryAllByText(/aID kIT/i)[0];
  expect(navElement).toBeInTheDocument();
});
