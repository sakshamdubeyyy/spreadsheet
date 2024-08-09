import React, { useState } from 'react';
import { useStore } from '../store';

const Cell = ({ rowIndex, colIndex }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, formatting, searchQuery, updateData, setSelectedCell } = useStore();
  const cellId = `${rowIndex}-${colIndex}`;
  const value = data[cellId] || '';
  const format = formatting[cellId] || {};
  
  const isHighlighted = searchQuery && value.toLowerCase().includes(searchQuery.toLowerCase());

  const handleBlur = (e) => {
    setIsEditing(false);
    updateData(cellId, e.target.innerText);
  };

  return (
    <div
      contentEditable={isEditing}
      suppressContentEditableWarning
      className={`border p-2 min-w-[100px] min-h-[30px] outline-none ${isHighlighted ? 'bg-yellow-200' : ''}`}
      style={{
        textAlign: format.textAlign || 'left',
        fontSize: format.fontSize || '14px',
      }}
      onClick={() => {
        setIsEditing(true);
        setSelectedCell(cellId);
      }}
      onBlur={handleBlur}
    >
      {value}
    </div>
  );
};

export default Cell;
