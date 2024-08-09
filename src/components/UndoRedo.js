import React from 'react';
import { useStore } from '../store';

const UndoRedo = () => {
  const { undo, redo, history, redoHistory } = useStore();

  return (
    <div className="flex space-x-2 p-2">
      <button
        onClick={undo}
        disabled={history.length === 0}
        className="p-2 bg-gray-300 rounded"
      >
        Undo
      </button>
      <button
        onClick={redo}
        disabled={redoHistory.length === 0}
        className="p-2 bg-gray-300 rounded"
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedo;
