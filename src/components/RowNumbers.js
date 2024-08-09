import React from 'react';

const RowNumbers = ({ numRows }) => {
  return (
    <div>
      {Array.from({ length: numRows }).map((_, i) => (
        <div key={i} className="border p-2 font-bold">
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default RowNumbers;
