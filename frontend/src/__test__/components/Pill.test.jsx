import { render, screen } from '@testing-library/react';

import Pill from '../../components/Pill/Pill';

const nameOfMedication = 'pill';
const type = 'pills';
const expirationDate = '01.01';

test('component Pill appears', () => {
  render(<Pill typeOfMedication={type} name={nameOfMedication} />);
  const name = screen.getAllByText(/pill/i)[0];
  expect(name).toBeInTheDocument();
});

test('component Pill with attribute showExpirationDate appears with expiration date', () => {
  render(<Pill typeOfMedication={type} name={nameOfMedication} showExpirationDate expirationDate={expirationDate} />);
  const expirationText = screen.getAllByText(/Exp. date:/i)[0];
  expect(expirationText).toBeInTheDocument();
});

test('component Pill without attribute showExpirationDate appears without expiration date', () => {
  render(<Pill typeOfMedication={type} name={nameOfMedication} />);
  const notFound = null;
  const name = screen.queryByText(/Exp. date:/i);
  expect(name).toBe(notFound);
});
