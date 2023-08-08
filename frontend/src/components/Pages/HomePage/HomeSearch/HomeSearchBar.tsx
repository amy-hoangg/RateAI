import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${searchTerm}?term=${encodeURIComponent(searchTerm)}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
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
