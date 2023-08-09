import React, { useState } from 'react';
import { StarRating, TypeNewReview } from '../../../../types'
import reviewsService from '../../../../service/reviewsService';

type Props = {
  onSubmit: (newReview: TypeNewReview) => void;
};

const AddNewReviewForm = ({ onSubmit }: Props) => {
  const [review_ai_id, setAppID] = useState('');
  const [review_reviewer_id, setReviewer] = useState('64ceb53dfc3940a3d389b73a');
  const [review_star, setStar] = useState(StarRating.ONE);
  const [review_content, setContent] = useState('');
  const [review_time, setTimeReview] = useState(new Date)
  const [review_like, setLike] = useState(0);
  const [review_dislike, setDislike] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newReview: TypeNewReview = {
      review_ai_id,
      review_reviewer_id,
      review_star,
      review_content,
      review_time,// Convert to ISO date string
      review_like,
      review_dislike,
    };

    try {
      const createdReview = await reviewsService.createNewReview(newReview);
      console.log('Review created:', createdReview);

      onSubmit(newReview);
    } 
    catch (error) {
      console.error('Error creating user:', error);
    }

    setAppID('');
    setReviewer('64ceb53dfc3940a3d389b73a');
    setStar(StarRating.ONE);
    setContent('');
    setTimeReview(new Date);
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <h2>Add New Review</h2>
      <form onSubmit={handleSubmit}>
        <label>AI ID:</label>
        <input
          type="text"
          value={review_ai_id}
          onChange={(e) => setAppID(e.target.value)}
        />

        <label>Star Rating:</label>
        <select
          value={review_star}
          onChange={(e) => setStar(Number(e.target.value) as StarRating)}
        >
          {Object.values(StarRating).map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>

        <label>Review Content:</label>
        <textarea
          value={review_content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddNewReviewForm;
