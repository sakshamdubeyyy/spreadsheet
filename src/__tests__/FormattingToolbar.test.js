import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormattingToolbar from '../components/FormattingToolbar';
import { useStore } from '../store';

jest.mock('../store', () => ({
  useStore: jest.fn(),
}));

const mockUpdateFormatting = jest.fn();

beforeEach(() => {
  useStore.mockReturnValue({
    updateFormatting: mockUpdateFormatting,
    selectedCell: '0-0',
  });
});

test('applies text alignment formatting', () => {
  const { getByText } = render(<FormattingToolbar />);
  fireEvent.click(getByText('Align Left'));
  expect(mockUpdateFormatting).toHaveBeenCalledWith('0-0', { textAlign: 'left' });
});

test('applies font size formatting', () => {
  const { getByPlaceholderText, getByText } = render(<FormattingToolbar />);
  fireEvent.change(getByPlaceholderText('Font Size'), { target: { value: '18' } });
  fireEvent.click(getByText('Align Left'));
  expect(mockUpdateFormatting).toHaveBeenCalledWith('0-0', { fontSize: '18px' });
});
