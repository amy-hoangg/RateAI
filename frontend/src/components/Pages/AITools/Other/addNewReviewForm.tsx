import React, { useState } from 'react';
import { StarRating, TypeNewReview } from '../../../../types'

type Props = {
  onSubmit: (newReview: TypeNewReview) => void;
};

const AddNewReviewForm = ({ onSubmit }: Props) => {
  const [review_ai_id, setAppID] = useState('');
  const [review_reviewer_id, setReviewer] = useState('');
  const [review_star, setStar] = useState(StarRating.ONE);
  const [review_content, setContent] = useState('');
  const [review_time, setTimeReview] = useState('');
  const [review_like, setLike] = useState(0);
  const [review_dislike, setDislike] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newReview: TypeNewReview = {
      review_ai_id,
      review_reviewer_id,
      review_star,
      review_content,
      review_time: new Date(review_time), // Convert to Date object
      review_like,
      review_dislike,
    };

    onSubmit(newReview);
    // Clear the form fields after submission
    setAppID('');
    setReviewer('');
    setStar(StarRating.ONE);
    setContent('');
    setTimeReview('');
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <h2>Add New Review</h2>
      <form onSubmit={handleSubmit}>
        <label>App ID:</label>
        <input
          type="text"
          value={review_ai_id}
          onChange={(e) => setAppID(e.target.value)}
        />

        <label>Reviewer:</label>
        <input
          type="text"
          value={review_reviewer_id}
          onChange={(e) => setReviewer(e.target.value)}
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
