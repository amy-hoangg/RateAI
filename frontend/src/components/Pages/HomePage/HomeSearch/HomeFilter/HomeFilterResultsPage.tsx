import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import filterService from '../../../../../service/filterService';
import { TypeSingleAI } from '../../../../../types';
import AIsList from '../../../AITools/AIsList';

const HomeFilterResultsPage = () => {
  const [results, setResults] = useState<TypeSingleAI[]>([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const selectedCategoryParams = queryParams.get('category');
  const selectedPriceParams = queryParams.get('price');

  useEffect(() => {
    console.log(
      'Effect triggered with categories:',
      selectedCategoryParams,
      'and price:',
      selectedPriceParams
    );

    if (selectedCategoryParams && selectedPriceParams) {
      const categoriesArray = selectedCategoryParams.split('+');
      const priceArray = selectedPriceParams.split('+');

      console.log('Categories array:', categoriesArray, 'Price array:', priceArray);

      filterService
        .filterAI(categoriesArray, priceArray)
        .then((data) => {
          console.log('Data received:', data);
          setResults(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching AIs:', error);
          setLoading(false);
        });
    }
  }, [selectedCategoryParams, selectedPriceParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Filter Results</h2>
      <AIsList ais={results} />
    </div>
  );
};

export default HomeFilterResultsPage;
