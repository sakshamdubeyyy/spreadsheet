import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../components/Grid';

test('renders a grid of cells', () => {
  const { getAllByRole } = render(<Grid />);
  expect(getAllByRole('gridcell').length).toBe(1000); // Check if grid contains 1000 cells
});
