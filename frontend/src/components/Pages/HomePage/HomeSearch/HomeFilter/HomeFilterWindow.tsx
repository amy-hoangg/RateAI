import React from 'react';

type Props = {
  selectedCategories: string[];
  selectedPrice: string[];
  handleCategoryChange: (category: string) => void;
  handlePriceChange: (price: string) => void;
  handleApplyHomeFilterWindow: () => void;
};

const categoriesList = [
  "social media",
  "marketing",
  "SEO",
  "art/image",
  "video",
  "audio",
  "management",
  "study",
  "website",
  "developer tools",
  "copy writing",
  "content creation",
  "chat bot",
];

const priceList = ["free", "paid"];

const HomeFilterWindow: React.FC<Props> = ({
  selectedCategories,
  selectedPrice,
  handleCategoryChange,
  handlePriceChange,
  handleApplyHomeFilterWindow
}) => {
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
