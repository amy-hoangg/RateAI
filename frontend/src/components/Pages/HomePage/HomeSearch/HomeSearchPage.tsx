import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import aisService from '../../../../service/aisService'; // Import the AIS service
import { TypeSingleAI } from '../../../../types'; // Adjust the import path to the actual location of types
import AIsList from '../../AITools/AIsList';

const HomeSearchPage = () => {
  const location = useLocation(); // Get the current location
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('term') || ''; // Use an empty string as default

  const [results, setResults] = useState<TypeSingleAI[]>([]); // Provide the correct type here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    aisService.searchAI(searchTerm)
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching AIs:', error);
        setLoading(false);
      });
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>; // You can add a loading indicator while waiting for data to load.
  }

  return (
    <div>
      <h2>Search Results for: {searchTerm}</h2>
      <ul>
      </ul>
    </div>
  );
};

export default HomeSearchPage;
