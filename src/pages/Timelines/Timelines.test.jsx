import { render, screen, expect } from '@testing-library/react';
import Timelines from './Timelines';
import React from "react";
import { it } from 'vitest';

it('selección de timelines', () => {
  render(<Timelines />);
  const linkElement = screen.getByText(/Lord of the rings/i);
  expect(linkElement).toBeInTheDocument();
});
