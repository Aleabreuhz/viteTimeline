import { render, screen,  test, expect } from '@testing-library/react';
import Timelines from './Timelines';
import React from "react";

test('selección de timelines', () => {
  render(<Timelines />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
