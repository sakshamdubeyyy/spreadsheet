import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../components/Search';
import { useStore } from '../store';

jest.mock('../store', () => ({
  useStore: jest.fn(),
}));

const mockSetSearchQuery = jest.fn();

beforeEach(() => {
  useStore.mockReturnValue({
    setSearchQuery: mockSetSearchQuery,
  });
});

test('updates search query on input change', () => {
  const { getByPlaceholderText, getByText } = render(<Search />);
  fireEvent.change(getByPlaceholderText('Search...'), { target: { value: 'Test Query' } });
  fireEvent.click(getByText('Search'));
  expect(mockSetSearchQuery).toHaveBeenCalledWith('Test Query');
});
