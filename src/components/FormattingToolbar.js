import React, { useState } from 'react';
import { useStore } from '../store';

const FormattingToolbar = () => {
  const { updateFormatting, selectedCell } = useStore();

  const applyFormatting = (format) => {
    if (selectedCell) {
      updateFormatting(selectedCell, format);
    }
  };

  return (
    <div className="flex space-x-2 p-2 bg-gray-100 border-b">
      <button onClick={() => applyFormatting({ textAlign: 'left' })}>Align Left</button>
      <button onClick={() => applyFormatting({ textAlign: 'center' })}>Align Center</button>
      <button onClick={() => applyFormatting({ textAlign: 'right' })}>Align Right</button>
      <input
        type="number"
        placeholder="Font Size"
        onChange={(e) => applyFormatting({ fontSize: `${e.target.value}px` })}
        className="border p-1"
      />
    </div>
  );
};

export default FormattingToolbar;
