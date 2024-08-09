import React, { useState } from 'react';
import Cell from './Cell';

const Grid = () => {
  const numRows = 1000;
  const numCols = 26;
  const rowsPerPage = 100;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const startRow = (currentPage - 1) * rowsPerPage;
  const rows = Array.from({ length: rowsPerPage }, (_, i) => i + startRow);
  const cols = Array.from({ length: numCols });

  return (
    <div>
      <div className="overflow-auto border">
        <div className="inline-block min-w-full">
          <div className="grid" style={{ gridTemplateColumns: `repeat(${numCols}, minmax(100px, 1fr))` }}>
            {rows.map((rowIndex) =>
              cols.map((_, colIndex) => (
                <Cell key={`${rowIndex}-${colIndex}`} rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="p-2 bg-gray-300">Previous</button>
        <button onClick={handleNextPage} className="p-2 bg-gray-300">Next</button>
      </div>
    </div>
  );
};

export default Grid;
