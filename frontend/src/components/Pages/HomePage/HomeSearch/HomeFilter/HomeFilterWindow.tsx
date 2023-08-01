import React, { useState } from 'react';

interface HomeFilterWindowProps {
  onApplyHomeFilterWindow: (selectedCategories: string[], selectedPrice: string[]) => void;
}

const categoriesList = [
  'social media',
  'marketing',
  'SEO',
  'art/image',
  'video',
  'audio',
  'management',
  'study',
  'website',
  'developer tools',
  'copy writing',
  'content creation',
  'chat bot',
];

const priceList = ['free', 'paid'];

const HomeFilterWindow: React.FC<HomeFilterWindowProps> = ({ onApplyHomeFilterWindow }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

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
    onApplyHomeFilterWindow(selectedCategories, selectedPrice);
  };

  return (
    <div className="filter-popup">
      <h3>Home Filter Search</h3>
      <div className="category-filter">
        <p>Categories:</p>
        {categoriesList.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div className="price-filter">
        <p>Price:</p>
        {priceList.map((price) => (
          <label key={price}>
            <input
              type="checkbox"
              checked={selectedPrice.includes(price)}
              onChange={() => handlePriceChange(price)}
            />
            {price}
          </label>
        ))}
      </div>
      <button onClick={handleApplyHomeFilterWindow}>Apply</button>
    </div>
  );
};

export default HomeFilterWindow;
