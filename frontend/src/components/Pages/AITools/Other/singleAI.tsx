import React, { useState } from 'react'; 
import { TypeSingleAI } from '../../../../types'; 
import { Link } from "react-router-dom";
import aisService from '../../../../service/aisService';

type Props = {
  eachAI: TypeSingleAI;
};

const SingleAI = ({ eachAI }: Props) => {
  const [saves, setSaves] = useState(eachAI.ai_saves); // Initialize saves state

  const handleSave = async () => {
    try {
      // Send a request to update the saves in the backend
      await aisService.updateSaves(eachAI._id);
  
      // Update the UI to reflect the updated saves
      setSaves((prevSaves) => prevSaves + 1);
      console.log('save successfully');
    } 
    
    catch (error) {
      console.error('Error saving AI:', error);
    }
  };

  return (
    <div>
      <ul>
        <li>
          Name: 
          <Link to={`/ais/fetch/${eachAI._id}`}>
            {eachAI.ai_name}
          </Link>
        </li>

        <li>Star Rating: {eachAI.ai_star_rating}</li>
        <li>Description: {eachAI.ai_description}</li>
        <li>Saves: {eachAI.ai_saves}</li>
        <li>Sold: {eachAI.ai_sold}</li>
        <li>Price: {eachAI.ai_price}</li>
        <li>Categories: {eachAI.ai_categories.join(', ')}</li>
        <li>Time created: {eachAI.ai_timecreated.toLocaleString()}</li>
        <li>Review Count: {eachAI.ai_reviews_review_id.length}</li>
        <li>Reviews: {eachAI.ai_reviews_review_id.join(', ')}</li>
        <li>Seller: {eachAI.ai_seller_id}</li>
        <button onClick={handleSave}>save</button>
      </ul>
    </div>
  );
};

export default SingleAI;
