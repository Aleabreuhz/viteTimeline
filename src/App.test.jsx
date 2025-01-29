import { render, screen, fireEvent } from '@testing-library/react';
import { test, describe } from 'vitest';
import App from './App';


describe('CreateQuiz', () => {
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
});