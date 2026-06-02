import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /hemant kumar/i })).toBeInTheDocument();
});
