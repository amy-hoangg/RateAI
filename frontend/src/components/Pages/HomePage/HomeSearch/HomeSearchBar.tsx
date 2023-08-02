import React, { useState } from 'react';
import { HomeSearchBarProps } from '../../../../types';

const HomeSearchBar = ({ onSearch } : HomeSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter search term..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HomeSearchBar;
