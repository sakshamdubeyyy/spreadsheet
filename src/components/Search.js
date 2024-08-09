import React, { useState } from 'react';
import { useStore } from '../store';

const Search = () => {
  const [query, setQuery] = useState('');
  const { setSearchQuery } = useStore();

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white">
        Search
      </button>
    </div>
  );
};

export default Search;
