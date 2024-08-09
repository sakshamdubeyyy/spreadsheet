import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UndoRedo from '../components/UndoRedo';
import { useStore } from '../store';

jest.mock('../store', () => ({
  useStore: jest.fn(),
}));

const mockUndo = jest.fn();
const mockRedo = jest.fn();

beforeEach(() => {
  useStore.mockReturnValue({
    undo: mockUndo,
    redo: mockRedo,
    history: [],
    redoHistory: [],
  });
});

test('calls undo function', () => {
  const { getByText } = render(<UndoRedo />);
  fireEvent.click(getByText('Undo'));
  expect(mockUndo).toHaveBeenCalled();
});

test('calls redo function', () => {
  const { getByText } = render(<UndoRedo />);
  fireEvent.click(getByText('Redo'));
  expect(mockRedo).toHaveBeenCalled();
});
