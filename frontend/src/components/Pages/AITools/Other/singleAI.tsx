import React, { useEffect, useState } from "react";
import { TypeSingleAI } from "../../../../types";
import { Link } from "react-router-dom";
import aisService from "../../../../service/aisService";
import usersService from "../../../../service/usersService";

type Props = {
  eachAI: TypeSingleAI;
};

const SingleAI = ({ eachAI }: Props) => {

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkIfSaved = async () => {
      const userId = localStorage.getItem('userId');

      if (userId) {
        try {
          const user = await usersService.getOneUser(userId);
          if (user && user.user_saves_ai_id) {
            const isSavedAI = user.user_saves_ai_id.some(
              (savedAI) => savedAI._id === eachAI._id
            ); //at least one element in the array satify the condition
            setIsSaved(isSavedAI);
          }
        } catch (error) {
          console.error('Error checking if AI is saved:', error);
        }
      }
    };

    checkIfSaved();
  }, [eachAI._id]);


  const handleSave = async () => {
    try {
      if (isSaved) {
        await aisService.unSave(eachAI._id);
        setIsSaved(false);
        console.log('Unsaved successfully');      
      } 
      else {
        // Handle save logic
        await aisService.updateSaves(eachAI._id);
        setIsSaved(true);
        console.log('Saved successfully');
      }
    }
    
    catch (error) {
      console.error("Error saving AI:", error);
    }
  };

  const handlePutOnCart = async () => {
    try {
      await usersService.putOnCart(eachAI._id);
      console.log("put on cart successfully");
    } catch (error) {
      console.error("Error putting on cart", error);
    }
  };

  return (
    <div>
      <ul>
        <li>
          Name:
          <Link to={`/ais/fetch/${eachAI._id}`}>{eachAI.ai_name}</Link>
        </li>

        <li>Star Rating: {eachAI.ai_star_rating}</li>
        <li>Description: {eachAI.ai_description}</li>
        <li>Saves: {eachAI.ai_saves}</li>
        <li>Sold: {eachAI.ai_sold}</li>
        <li>Price: {eachAI.ai_price}</li>
        <li>Categories: {eachAI.ai_categories.join(", ")}</li>
        <li>Time created: {eachAI.ai_timecreated.toLocaleString()}</li>
        <li>Review Count: {eachAI.ai_reviews_review_id.length}</li>
        {/* Add a null check for ai.ai_seller_id */}
        {eachAI.ai_seller_id ? (
          <p>Seller: {eachAI.ai_seller_id.seller_storeName}</p>
        ) : (
          <p>No Seller Available</p>
        )}

        <button onClick={handleSave}>
          {isSaved ? "Unsave" : "Save"}
        </button>

        <button onClick={handlePutOnCart}>put on cart</button>

        <button>add review</button>
      </ul>
    </div>
  );
};

export default SingleAI;
