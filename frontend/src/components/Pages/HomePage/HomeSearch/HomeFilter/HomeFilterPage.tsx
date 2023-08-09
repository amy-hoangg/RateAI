import React, { useState } from 'react';
import HomeFilterWindow from './HomeFilterWindow';
import { useNavigate } from 'react-router-dom';

const HomeFilterPage = () => {
  const [isHomeFilterVisible, setIsHomeFilterVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  const navigate = useNavigate(); // Initialize the navigate function

  const handleToggleHomeFilter = () => {
    setIsHomeFilterVisible((prevState) => !prevState);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((c) => c !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrice((prevSelectedPrices) => {
      if (prevSelectedPrices.includes(price)) {
        return prevSelectedPrices.filter((p) => p !== price);
      } else {
        return [...prevSelectedPrices, price];
      }
    });
  };
  const handleApplyHomeFilterWindow = () => {
    const selectedCategoryParams = selectedCategories.map((category) => encodeURIComponent(category)).join("+");
    const selectedPriceParams = selectedPrice.map((price) => encodeURIComponent(price)).join("+");
  
    // Construct the URL with selected categories and prices as query parameters
    const newUrl = `/filter?category=${selectedCategoryParams}&price=${selectedPriceParams}`;
    navigate(newUrl); // Use the navigate function
  };  
  

  return (
    <div>
      <button onClick={handleToggleHomeFilter}>Filter</button>
      {isHomeFilterVisible && (
        <HomeFilterWindow
          selectedCategories={selectedCategories}
          selectedPrice={selectedPrice}
          handleCategoryChange={handleCategoryChange}
          handlePriceChange={handlePriceChange}
          handleApplyHomeFilterWindow={handleApplyHomeFilterWindow}
        />
      )}
    </div>
  );
};

export default HomeFilterPage;
