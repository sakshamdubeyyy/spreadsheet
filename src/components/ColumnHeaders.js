import React from 'react';

const ColumnHeaders = ({ numCols }) => {
  const headers = Array.from({ length: numCols }, (_, i) => String.fromCharCode(65 + i));
  
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${numCols}, minmax(100px, 1fr))` }}>
      {headers.map(header => (
        <div key={header} className="border p-2 font-bold">
          {header}
        </div>
      ))}
    </div>
  );
};

export default ColumnHeaders;
