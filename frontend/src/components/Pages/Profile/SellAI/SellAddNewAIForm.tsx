import React, { useEffect, useState } from 'react';
import { StarRating, TypeNewAI, TypeSeller, TypeSingleReview } from '../../../../types';
import { categoriesList } from '../../../../utils/categoriesList';
import aisService from '../../../../service/aisService';


const SellAddNewAIForm = () => {
  const [ai_name, setName] = useState('');
  const [ai_star_rating, setStarRating] = useState(StarRating.ONE);
  const [ai_description, setDescription] = useState('');
  const [ai_saves, setSaves] = useState(0);
  const [ai_sold, setSolds] = useState(0);
  const [ai_price, setPrice] = useState(0);
  const [ai_categories, setSelectedCategories] = useState<string[]>([]);
  const [ai_timecreated, setTimeCreated] = useState(new Date)
  const [ai_reviews_review_id, setReviews] = useState<TypeSingleReview[]>([]);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newAI: TypeNewAI = {
      ai_name,
      ai_star_rating,
      ai_description,
      ai_saves,
      ai_sold,
      ai_price,
      ai_categories,
      ai_timecreated,
      ai_reviews_review_id
    };

    try {
      const createdAI = await aisService.createNewAI(newAI);
      console.log('AI created:', createdAI);
    } 
    
    catch (error) {
      console.error('Error creating user:', error);
    }

    // Clear the form fields after submission
    setName('');
    setStarRating(StarRating.ONE);
    setDescription('');
    setSaves(0);
    setSolds(0);
    setPrice(0);
    setSelectedCategories([]);
    setTimeCreated(new Date);
    setReviews([]);

  };

  return (
    <div>
      <h2>Add New AI</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
          type="text" 
          value={ai_name} 
          onChange={(e) => setName(e.target.value)} />
        </div>


        <div>
          <label>Description:</label>
          <textarea 
          value={ai_description} 
          onChange={(e) => setDescription(e.target.value)} />
        </div>


        <div>
          <label>Price:</label>
          <input 
          type="number" 
          value={ai_price} 
          onChange={(e) => setPrice(Number(e.target.value))} />
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
                checked={ai_categories.includes(category)}
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









