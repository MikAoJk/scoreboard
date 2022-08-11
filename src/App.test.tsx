import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ScoreBoard as h2', () => {
  render(<App />);
  const linkElement = screen.getByText(/ScoreBoard/i);
  expect(linkElement).toBeInTheDocument();
});
