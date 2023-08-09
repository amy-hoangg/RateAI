import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import filterService from '../../../../../service/filterService';
import { TypeSingleAI } from '../../../../../types';
import AIsList from '../../../AITools/AIsList';

const HomeFilterResultsPage = () => {
  const { selectedCategories, selectedPrice } = useParams<{ selectedCategories: string, selectedPrice: string }>();
  const [results, setResults] = useState<TypeSingleAI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCategories && selectedPrice) {
      const categoriesArray = selectedCategories.split('&');
      const priceArray = selectedPrice.split('&');

      filterService.filterAI(categoriesArray, priceArray)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching AIs:', error);
          setLoading(false);
        });
    }
  }, [selectedCategories, selectedPrice]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Filter Results</h2>
      <AIsList ais={results}/> 
    </div>
  );
};

export default HomeFilterResultsPage;
