import React, { useState } from 'react'; 
import { TypeSingleAI } from '../../../../types'; 
import { Link } from "react-router-dom";
import aisService from '../../../../service/aisService';
import usersService from '../../../../service/usersService';

type Props = {
  eachAI: TypeSingleAI;
};

const SingleAI = ({ eachAI }: Props) => {

  const handleSave = async () => {
    try {
      // Send a request to update the saves in the backend
      await aisService.updateSaves(eachAI._id);
      // Update the UI to reflect the updated saves
      console.log('save successfully');
    } 
    
    catch (error) {
      console.error('Error saving AI:', error);
    }
  };

  const handlePutOnCart = async () => {
    try {
      await usersService.putOnCart(eachAI._id);
      console.log('put on cart successfully');
    }
    catch(error) {
      console.error('Error putting on cart', error);
    }
  }
 
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
        {/* Add a null check for ai.ai_seller_id */}
        {eachAI.ai_seller_id ? (
          <p>Seller: {eachAI.ai_seller_id.seller_storeName}</p>
        ) : (
          <p>No Seller Available</p>
        )}
        <button onClick={handleSave}>save</button>
        <button onClick={handlePutOnCart}>put on cart</button>
        <button>add review</button>
      </ul>
    </div>
  );
};

export default SingleAI;
