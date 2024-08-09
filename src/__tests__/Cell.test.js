import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cell from '../components/Cell';
import { useStore } from '../store';

jest.mock('../store', () => ({
  useStore: jest.fn(),
}));

const mockUpdateData = jest.fn();
const mockSetSelectedCell = jest.fn();

beforeEach(() => {
  useStore.mockReturnValue({
    data: {},
    formatting: {},
    searchQuery: '',
    updateData: mockUpdateData,
    setSelectedCell: mockSetSelectedCell,
  });
});

test('renders cell with default content', () => {
  const { getByText } = render(<Cell rowIndex={0} colIndex={0} />);
  expect(getByText('')).toBeInTheDocument();
});

test('handles cell content edit', () => {
  const { getByText } = render(<Cell rowIndex={0} colIndex={0} />);
  fireEvent.click(getByText('')); // Click to enter edit mode
  fireEvent.blur(getByText(''), { target: { innerText: 'New Value' } });
  expect(mockUpdateData).toHaveBeenCalledWith('0-0', 'New Value');
});

test('applies highlight if search query matches cell content', () => {
  useStore.mockReturnValue({
    data: { '0-0': 'Test Data' },
    formatting: {},
    searchQuery: 'Test',
    updateData: mockUpdateData,
    setSelectedCell: mockSetSelectedCell,
  });
  const { getByText } = render(<Cell rowIndex={0} colIndex={0} />);
  expect(getByText('Test Data')).toHaveClass('bg-yellow-200');
});
