import React, { useState } from 'react';
import { StarRating, TypeNewAI } from '../../../../types';
import { categoriesList } from '../../../../utils/categoriesList';

type Props = {
  onSubmit: (newAI: TypeNewAI) => void;
};

const SellAddNewAIForm = ({ onSubmit } : Props) => {
  const [name, setName] = useState('');
  const [starRating, setStarRating] = useState(StarRating.ONE);
  const [description, setDescription] = useState('');
  const [saves, setSaves] = useState(0);
  const [price, setPrice] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviews, setReviews] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newAI: TypeNewAI = {
      name,
      star_rating: starRating,
      description,
      saves,
      price,
      categories: selectedCategories,
      review_count: reviewCount,
      reviews: reviews
    };

    onSubmit(newAI);
    // Clear the form fields after submission
    setName('');
    setStarRating(StarRating.ONE);
    setDescription('');
    setSaves(0);
    setPrice('');
    setSelectedCategories([]);
  };

  return (
    <div>
      <h2>Add New AI</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>


        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>


        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div>
          <label>Categories:</label>
          {/* Use checkboxes for categories selection */}
          {categoriesList.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                name="categories"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedCategories((prev) => [...prev, category])
                    : setSelectedCategories((prev) =>
                        prev.filter((item) => item !== category)
                      )
                }
              />
              <label>{category}</label>
            </div>
          ))}
        </div>

        <button type="submit">Add AI</button>
      </form>
    </div>
  );
};

export default SellAddNewAIForm;



