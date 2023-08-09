import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypeSingleAI } from '../../../../types';
import aisService from '../../../../service/aisService';
import AddNewReviewForm from './addNewReviewForm';

type Params = {
  id: string;
};

const SingleAIDetails = () => {
  const { id } = useParams<Params>();
  const [aiDetails, setAIDetails] = useState<TypeSingleAI | null>(null);
  const [showAddReviewForm, setShowAddReviewForm] = useState(false); // State to control form visibility

  useEffect(() => {
    const fetchAIDetails = async () => {
      if (id) {
        try {
          const aiData = await aisService.getOneAI(id);
          setAIDetails(aiData);
        } catch (error) {
          console.error('Error fetching AI details:', error);
        }
      }
    };

    fetchAIDetails();
  }, [id]);


  const handleAddReviewClick = () => {
    setShowAddReviewForm(!showAddReviewForm); // Show the AddNewReviewForm when the button is clicked
  };


  if (!aiDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{aiDetails.ai_name}</h2>
      <ul>
        <li>Star Rating: {aiDetails.ai_star_rating}</li>
        <li>Description: {aiDetails.ai_description}</li>
        <li>Saves: {aiDetails.ai_saves}</li>
        <li>Sold: {aiDetails.ai_sold}</li>
        <li>Price: {aiDetails.ai_price}</li>
        <li>Categories: {aiDetails.ai_categories.join(', ')}</li>
        <li>Time created: {new Date(aiDetails.ai_timecreated).toLocaleString()}</li>
        <li>Review Count: {aiDetails.ai_reviews_review_id.length}</li>
        <li>Reviews: {aiDetails.ai_reviews_review_id.join(', ')}</li>
        <li>Seller: {aiDetails.ai_seller_id}</li>
      <button onClick={handleAddReviewClick}>Add Review</button>
      </ul>

      {showAddReviewForm && (
        <AddNewReviewForm 
          onSubmit={(newReview) => {
            console.log('New review:', newReview);
            setShowAddReviewForm(false); // Hide the form after submission
          }}
        />
      )}

    </div>
  );
};

export default SingleAIDetails;
